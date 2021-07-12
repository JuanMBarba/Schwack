export const getUsersChannels = (currentUser, channels) => {
    let userChannels = [];

    if (currentUser.channelIds){
            for (let i = 0; i < currentUser.channelIds.length; i++) {
                if (channels[currentUser.channelIds[i]]){
                    userChannels.push(channels[currentUser.channelIds[i]])
            }
    }}

    return userChannels;
}

export const getChannelMessages = (messages, channelId) => {
    
    let channelMessages = [];
    for (let id in messages){
        // console.log(channelMessages);
        // console.log(messages[id].channelId);
        // console.log(channelId);
        if (messages[id].channelId === Number(channelId)){
            channelMessages.push(messages[id]);
        }
    }
    // console.log(channelMessages)
    return channelMessages;
}

export const getDMChannelUserNames = (users, userIds, currentUserId) => {
    let displayNames = [];
    for (let i = 0; i < userIds.length; i++) {
        //console.log(users[userIds[i]])
        if (users[userIds[i]] && currentUserId !== userIds[i]){
            displayNames.push(users[userIds[i]].displayName)
        }
    }
    return displayNames;
}