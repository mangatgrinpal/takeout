class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_number, :status, :order_price, :created_at, :time_placed


  has_one :customer, through: :order_customer
  has_many :order_items
  has_many :items, through: :order_items

  def time_placed
  	object.created_at.strftime('%I:%M %P')
  end
end
