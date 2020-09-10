class Order < ApplicationRecord
	belongs_to :restaurant

	validates_presence_of :order_number, :order_price

	has_one :customer
	
	has_many :order_items
	has_many :items, through: :order_items
end
