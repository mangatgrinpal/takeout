class Restaurant < ApplicationRecord
	has_one_attached :image
	has_many :orders

	validates :name, presence: true
	validates :description, presence: true

	belongs_to :user
	has_one :address, dependent: :destroy

	has_many :menu_items
	has_many :items, through: :menu_items
end
