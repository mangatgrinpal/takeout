class OrdersController < ApplicationController
	before_action :authenticate_user!, except: :create
	# before_create do
	# 	self.order_number = generate_order_number if order_number.blank?
	# end


	def index

		@orders = Order.where(restaurant_id: params[:restaurant]).includes(:order_items, :items, :customer).order('created_at ASC')


		if @orders
			render json: @orders, status: 200
		else
			render status: 404
		end
	end

	def create

		Order.transaction do
			@order = Order.new(
				restaurant_id: params[:restaurant_id],
				order_price: params[:order_price],
				order_number: generate_order_number,
				status: 'New'
			)

			@customer_exists = Customer.where(email: params['customer']['email'])

			if @customer_exists.length == 1
				@customer = @customer_exists[0]
			else

				@customer = Customer.new(customer_params)
			end
			@order_customer = OrderCustomer.create!(order: @order, customer: @customer)

		end

		if @order.save
			OrderMailer.order_placed_email(@order).deliver_now
			@items = JSON.parse(params[:bag])
			@items.each do |item|

				@order_item = OrderItem.create!(order: @order, item_id: item["id"], quantity: item["quantity"])

			end
		end

	end

	def update

		@order = Order.update(params[:id], status: params[:new_status])

		if @order.save

			case @order.status
			when 'In Progress'
				OrderMailer.order_accepted_email(@order).deliver_now
			when 'Ready for pickup'
				OrderMailer.order_ready_email(@order).deliver_now
			when 'Completed'
				OrderMailer.order_completed_email(@order).deliver_now
			else
				OrderMailer.order_cancelled_email(@order).deliver_now
			end
			render json: @order, status: 200
		else
			render status: 400
		end

	end

	def destroy
	end


	private

	def customer_params
		params.require(:customer).permit(:first_name, :last_name, :email, :phone_number)
	end

	def generate_order_number
		order_no = ("A".."Z").to_a.sample(3).join("") + "-" + Time.now.strftime("%m%d%M%S")
		exist = Order.find_by(order_number: order_no)
		if !exist

			return order_no
		else
			self.generate_order_number
		end

	end




end
