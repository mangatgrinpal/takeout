class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :item_id, :quantity

  belongs_to :item
  belongs_to :order
end
