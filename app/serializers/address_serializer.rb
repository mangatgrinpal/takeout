class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street_address, :street_address_2, :city, :state, :zip_code

  belongs_to :restaurant
end
