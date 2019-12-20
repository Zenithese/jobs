class CreateSavedJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_jobs do |t|
      t.integer :job_id, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end
  end
end
