class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :tags, array: true, default: []
      t.string :duties, array: true, default: []
      t.string :qualifications, array: true, default: []

      t.timestamps
    end
    add_index :jobs, :tags, using: 'gin'
    add_index :jobs, :duties, using: 'gin'
    add_index :jobs, :qualifications, using: 'gin'
  end
end
