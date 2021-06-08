// const getUsersChannels 

const getChannelMessages = (messages, channelId) => {
    let channelMessages = []
    for (let id in messages){
        if (messages[id].channelId === channelId){
            channelMessages.push(messages[id]);
        }
    }
    return channelMessages;
}