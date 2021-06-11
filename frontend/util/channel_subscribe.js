import { removeMessage, receiveMessage } from "../actions/message"
const createConnection = (currentUserId, channelId, dispatch) => {
    return App.cable.subscriptions.create(
        { channel: "ChatChannel", id: channelId },
        {
            received: data => {
                if (data.type === "REMOVE_MESSAGE") {
                    dispatch(removeMessage(data.messageId))
                }
                else if (data.message.userId !== currentUserId) {
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