class Item < ApplicationRecord
	has_one_attached :image
	validates_presence_of :name, :description, :price

	has_one :menu_item
	has_many :order_items
end
