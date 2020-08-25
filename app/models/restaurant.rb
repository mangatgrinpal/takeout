class Restaurant < ApplicationRecord
	has_one_attached :image
	validates :name, presence: true
	validates :description, presence: true

	belongs_to :user
	has_one :address
end
