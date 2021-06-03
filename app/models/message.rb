class Message < ApplicationRecord
    validates :user_id, :channel_id, :body, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel

end
