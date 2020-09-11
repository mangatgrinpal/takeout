class OrdersController < ApplicationController
	before_action :authenticate_user!, except: :create
	# before_create do
	# 	self.order_number = generate_order_number if order_number.blank?
	# end


	def index
	end

	def create
		byebug
		Order.transaction do
			@order = Order.new(order_params)
			@customer = Customer.new(customer_params)
			@order_customer = OrderCustomer.create!(order: @order, customer: @customer)

		end

	end

	def destroy
	end


	private

	def order_params
		params.require(:order).permit(
			:restaurant_id,
			:order_price,
			order_number: generate_order_number, 
			status: 'New')
	end

	def customer_params
		params.require(:customer).permit(:first_name, :last_name, :email, :phone_number)
	end

	def generate_order_number
		order_no = ("A".."Z").to_a.sample(3).join("") + "-" + Time.now.strftime("%m%d%M%S")
		byebug
		exist = Order.find_by(order_number: order_no)
		if !exist
			return order_no
		else
			self.generate_order_number
		end

	end




end
