import React from "react";
import MessageFormContainer from "./message_form_container";
import MessageListItemContainer from "./message_list_item_container";

class MessageList extends React.Component{
    constructor(props){
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
    }

    componentDidMount(){
        this.props.fetchMessages();
        this.props.fetchUsers();

        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    if (data.message.userId !== this.props.currentUserId){

                        this.props.receiveMessage(data.message);
                    }
                },
                speak: function (data) {
                    return this.perform("speak", data);
                }
            }
        );

    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    render(){
        const { messages, users } = this.props;
        
        const messageList = Object.values(messages).map((message, index) => {
            return (
                <li key={index}>
                    <MessageListItemContainer message={message} />
                    <div ref={this.bottom} />
                </li>
            )
        })

        return (
            <div className="message-list-container">
                <div ref={this.bottom} />
                <ul className="message-list">
                    {messageList}
                </ul>
                <MessageFormContainer />
            </div>
        )
        
    }
}

export default MessageList;