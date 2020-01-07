class ChangeEmailColumn < ActiveRecord::Migration[6.0]
  def change
    change_column_null :jobs, :email, false
  end
end
