# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string
#  dm_channel  :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Channel < ApplicationRecord
    validates :name, presence: true
    validates :dm_channel, inclusion: { in: [true, false]}

    has_many :messages,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Message

end
