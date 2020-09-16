class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_number, :status, :order_price, :created_at


  has_one :customer, through: :order_customer
  has_many :order_items
  has_many :items, through: :order_items
end
