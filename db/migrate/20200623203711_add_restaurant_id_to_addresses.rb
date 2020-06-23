class AddRestaurantIdToAddresses < ActiveRecord::Migration[6.0]
  def change
    add_column :addresses, :restaurant_id, :integer
    add_index :addresses, :restaurant_id
  end
end
