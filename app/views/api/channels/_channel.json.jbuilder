json.extract! channel, :id, :name, :description, :dm_channel
if channel.dm_channel == true
    json.extract! channel, :user_ids
end