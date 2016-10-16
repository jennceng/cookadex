class CreateCooks < ActiveRecord::Migration
  def change
    create_table :cooks do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :phone_number, null: false
      t.string :email
    end
  end
end
