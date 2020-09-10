class OrdersController < ApplicationController
	before_create :generate_order_number
	before_action :authenticate_user!, except: :create


	def index
	end

	def create

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
		params.require(:order).permit(order_number: generate_order_number, status: 'New', :restaurant_id, :order_price)
	end

	def customer_params
	end

	def generate_order_number
		order_no = ("A".."Z").to_a.sample(3).join + "-" + Time.now.strftime("%m%d%M%S")
		exist = Order.find_by(order_number: order_no)
		if !exist
			return order_no
		else
			self.generate_order_number
		end

	end




end
