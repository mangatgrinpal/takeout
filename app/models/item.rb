class Item < ApplicationRecord
	validates_presence_of :name, :description

	has_many :menu_items
end
