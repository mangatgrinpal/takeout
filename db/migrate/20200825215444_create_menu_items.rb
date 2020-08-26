class CreateMenuItems < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_items do |t|
      t.integer :restaurant_id
      t.integer :item_id

      t.timestamps
    end
    add_index :menu_items, :restaurant_id
    add_index :menu_items, :item_id
  end
end
