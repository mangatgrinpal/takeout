class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :phone_number
end
