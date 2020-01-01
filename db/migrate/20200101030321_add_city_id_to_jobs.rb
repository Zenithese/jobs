class AddCityIdToJobs < ActiveRecord::Migration[6.0]
  def change
    add_column :jobs, :city_id, :integer
  end
end
