class CreateUnions < ActiveRecord::Migration[6.0]
  def change
    create_table :unions do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :tags, array: true, default: []

      t.timestamps
    end
    add_index :unions, :tags, using: 'gin'
  end
end
