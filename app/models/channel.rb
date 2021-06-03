class Channel < ApplicationRecord
    validates :name, presence: true
    validates :dm_channel, presence: true, inclusion: { in: [true, false]}

    has_many :messages,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Message

end
