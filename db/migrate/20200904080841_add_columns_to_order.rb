class AddColumnsToOrder < ActiveRecord::Migration[6.0]
  def change
  	add_column :orders, :status, :string
  	add_column :orders, :restaurant_id, :integer
  	add_column :orders, :order_price, :decimal, precision: 6, scale: 2

  	add_index :orders, :status
  	add_index :orders, :restaurant_id

  end
end
