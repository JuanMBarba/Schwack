class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :memberships, [:user_id, :channel_id], unique: true
  end
end
