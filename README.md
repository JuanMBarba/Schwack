# Schwack

Schwack is a clone of the business communication platform, Slack. Schwack gives users the ability to create their very own channel, or already join a pre-existing one. In these channels, users can chat through live messaging.

## Schwack Live Link

[Go to Schwack!](https://schwack.herokuapp.com/)

## Technologies Used

- **Ruby on Rails** was used for the backend
- **React/Redux** was used for the frontend
- **PostgreSQL** was used for the database

## Features

### Live Messaging

- Users who are logged in will be able to chat live with other users
- When they submit a message in the chat, all users who are currently viewing that chat will have their messages updated to show the new message

<img width="912" alt="Screen Shot 2021-06-11 at 9 56 07 AM" src="https://user-images.githubusercontent.com/50244853/121723394-4fa6b880-ca9b-11eb-9545-c5d79c565804.png">

- If a user made a mistake in their message or want to update it, they can edit the message in order to correct/update it

<img width="769" alt="Screen Shot 2021-06-11 at 10 00 00 AM" src="https://user-images.githubusercontent.com/50244853/121723823-dcea0d00-ca9b-11eb-82df-8d9f5f69342d.png">

- If the user made a **huge** mistake on their message, they can completely delete their message

<img width="789" alt="Screen Shot 2021-06-11 at 10 01 40 AM" src="https://user-images.githubusercontent.com/50244853/121724252-70234280-ca9c-11eb-90e5-20c83cdc69fd.png">

- Editing and Deleting both happen in real time updating other users chats after completing the action

- I used Action Cable in order to accomplish these real time update features

```javascript

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

```
- In the frontend whenever the user logs in they are immidiately subscribed to all their channels chats
    - The code above is what is run to subscribe them to the channel stream in the backend
    - They are also subscribed to the a channel they create or join 

``` javascript
class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:id])
    stream_for @channel if @channel
  end

  def speak(data)
    socket = data
    @channel = Channel.find_by(id: data["message"]["channelId"])
    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
```
- The backend sets up a different chat stream for each channel and broadcasts messages back to the specified channel's subscribers
- Through this users only receive messages from channels they are subscribed to

## Future Directions

- Add direct messaging between 2 or more users
