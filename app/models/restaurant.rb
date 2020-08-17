class Restaurant < ApplicationRecord
	validates :name, presence: true
	validates :description, presence: true

	belongs_to :user
	has_one :address
end
