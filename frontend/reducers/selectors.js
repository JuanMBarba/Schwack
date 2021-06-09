// const getUsersChannels 

export const getChannelMessages = (messages, channelId) => {
    
    let channelMessages = []
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