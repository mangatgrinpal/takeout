class Item < ApplicationRecord
	has_one_attached :image
	validates_presence_of :name, :description, :price

	has_many :menu_items
end
