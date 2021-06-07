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

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

self_user = User.create!(display_name: "Juan Barba", email:"juan@mail.com", password: "123456")
demo_user = User.create!(display_name: "Demo User", email:"demo@mail.com", password: "123456")

channel1= Channel.create!(name: "general", dm_channel: false);