# == Schema Information
#
# Table name: memberships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Membership < ApplicationRecord
    validates :user_id, :channel_id, presence: true
    validates :user_id, uniqueness: { scope: :channel_id }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :user

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel
end
