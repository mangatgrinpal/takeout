class Order < ApplicationRecord

	has_one :customer
	
	has_many :order_items
	has_many :items, through: :order_items
end
