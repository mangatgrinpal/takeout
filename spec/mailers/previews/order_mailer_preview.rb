# Preview all emails at http://localhost:3000/rails/mailers/order_mailer
class OrderMailerPreview < ActionMailer::Preview
	def order_placed_email(order: Order.first)
		OrderMailer.order_placed_email(order)
	end

	def order_accepted_email(order: Order.first)
		OrderMailer.order_accepted_email(order)
	end

	def order_ready_email(order: Order.first)
		OrderMailer.order_ready_email(order)
	end

	def order_completed_email(order: Order.first)
		OrderMailer.order_completed_email(order)
	end

	def order_cancelled_email(order: Order.first)
		OrderMailer.order_cancelled_email(order)
	end
end
