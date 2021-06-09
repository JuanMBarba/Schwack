@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user", user: user
        # json.extract! user, :membership_ids
    end
end