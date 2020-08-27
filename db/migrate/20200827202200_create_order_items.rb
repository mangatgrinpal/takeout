class CreateOrderItems < ActiveRecord::Migration[6.0]
  def change
    create_table :order_items do |t|
      t.integer :order_id
      t.integer :item_id

      t.timestamps
    end
    add_index :order_items, :order_id
    add_index :order_items, :item_id
  end
end
