class Restaurant < ApplicationRecord
	validates :name, presence: true
	validates :description, presence: true

	has_one :address
end
