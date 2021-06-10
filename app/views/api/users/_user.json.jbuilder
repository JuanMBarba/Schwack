json.extract! user, :id, :display_name, :email
if current_user.id == user.id
    json.extract! user, :channel_ids
end