# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Message.destroy_all
Membership.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

self_user = User.create!(display_name: "Juan Barba", email:"juan@mail.com", password: "123456")
demo_user = User.create!(display_name: "Demo User", email:"demo@mail.com", password: "123456")

channel1 = Channel.create!(name: "general", dm_channel: false);
channel2 = Channel.create!(name: "random", dm_channel: false);
channel3 = Channel.create!(name: "other", dm_channel: false);

membership1 = Membership.create!(user_id: self_user.id, channel_id: channel1.id )
membership2 = Membership.create!(user_id: demo_user.id, channel_id: channel1.id )

membership3 = Membership.create!(user_id: self_user.id, channel_id: channel2.id )
membership4 = Membership.create!(user_id: demo_user.id, channel_id: channel2.id )

membership4 = Membership.create!(user_id: demo_user.id, channel_id: channel3.id )
