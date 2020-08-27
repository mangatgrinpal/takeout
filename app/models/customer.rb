class Customer < ApplicationRecord
	validates_presence_of :first_name, :last_name, :email
	validates :phone_number, presence: true, allow_blank: true


	has_many :order_customers
	has_many :orders, through: :order_customers
end
