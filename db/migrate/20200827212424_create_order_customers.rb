class CreateOrderCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :order_customers do |t|
      t.integer :order_id
      t.integer :customer_id

      t.timestamps
    end
    add_index :order_customers, :order_id
    add_index :order_customers, :customer_id
  end
end
