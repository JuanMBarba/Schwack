import { removeMessage, receiveMessage } from "../actions/message"
const createConnection = (currentUserId, channelId, dispatch) => {
    // console.log(membership)
    return App.cable.subscriptions.create(
        { channel: "ChatChannel", id: channelId },
        {
            received: data => {
                // console.log("received")
                if (data.type === "REMOVE_MESSAGE") {
                    dispatch(removeMessage(data.messageId))
                }
                else if (data.message.userId !== currentUserId) {
                    // console.log("hello")
                    dispatch(receiveMessage(data.message));
                }
            },
            speak: function (data) {
                return this.perform("speak", data);
            }
        }
    );
}

export default createConnection;