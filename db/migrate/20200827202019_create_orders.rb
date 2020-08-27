class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :order_number

      t.timestamps
    end
    add_index :orders, :order_number
  end
end
