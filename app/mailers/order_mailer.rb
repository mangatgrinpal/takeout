class OrderMailer < ApplicationMailer

	def order_placed_email(order)
		@order = order
		mail(
			to: @order.customer.email, 
			subject: "Your order has been placed #{@order.customer.first_name} #{@order.customer.last_name}."
			)
	end

	def order_accepted_email(order)
		@order = order
		mail(
			to: @order.customer.email, 
			subject: "#{@order.restaurant.name} has begun preparing your order #{@order.customer.first_name} #{@order.customer.last_name}."
			)
	end

	def order_ready_email(order)
		@order = order
		mail(
			to: @order.customer.email, 
			subject: "Your order is now ready for pickup #{@order.customer.first_name} #{@order.customer.last_name}."
			)
	end

	def order_completed_email(order)
		@order = order
		mail(
			to: @order.customer.email, 
			subject: "Thanks for picking up your order #{@order.customer.first_name} #{@order.customer.last_name}."
			)
	end

	def order_cancelled_email(order)
		@order = order
		mail(
			to: @order.customer.email, 
			subject: "#{@order.restaurant.name} has cancelled your order #{@order.customer.first_name} #{@order.customer.last_name}."
			)
	end
end
