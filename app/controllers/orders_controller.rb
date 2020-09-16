class OrdersController < ApplicationController
	before_action :authenticate_user!, except: :create
	# before_create do
	# 	self.order_number = generate_order_number if order_number.blank?
	# end


	def index

		@orders = Order.where(restaurant_id: params[:restaurant])


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
			@items = JSON.parse(params[:bag])
			@items.each do |item|

				@order_item = OrderItem.create!(order: @order, item_id: item["id"], quantity: item["quantity"])
			end
		end

	end

	def update

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
