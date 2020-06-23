class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.string :street_address
      t.string :street_address_2
      t.string :city
      t.string :state
      t.string :zip_code

      t.timestamps
    end
  end
end
