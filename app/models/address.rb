class Address < ApplicationRecord
	validates_presence_of :street_address, :city, :state, :zip_code
	validates :street_address_2, presence: true, allow_blank: true
end
