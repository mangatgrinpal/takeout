class UserSerializer < ActiveModel::Serializer
  attributes :id, :provider, :email

  has_one :restaurant

end
