const selectSpeak = (data, channelId) => {
    for (let i = 0; i < App.cable.subscriptions.subscriptions.length; i++) {
        let identifier = JSON.parse(App.cable.subscriptions.subscriptions[i].identifier);
        // console.log(identifier.id);
        // console.log(Number(channelId));
        if (identifier.id === Number(channelId )){
            console.log("success")
            App.cable.subscriptions.subscriptions[i].speak(data);
        }
    }
}

export default selectSpeak;