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
        // const fetchMessages = this.props.fetchMessages.bind(this)

        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    // this.setState({
                    //     messages: this.state.messages.concat(data)
                    // });

                    if (data.message.userId !== this.props.currentUserId){

                        this.props.receiveMessage(data.message);
                    }
                    // fetchMessages();
                    // Need to receive message instead
                    // this.props.createMessage(data);
                },
                speak: function (data) {
                    return this.perform("speak", data);
                }
            }
        );

    }

    componentDidUpdate() {
        //this.props.fetchMessages();
        this.bottom.current.scrollIntoView();
    }

    render(){
        const { messages, users } = this.props;
        // const messageList = this.state.messages.map((message,index) => {
        const messageList = Object.values(messages).map((message, index) => {
            // Might make this a messageitem container
            return (
                <li key={index}>
                    {/* {users[message.id].display_name} */}
                    {/* {message.userId}: {message.body}
                     */}
                    <MessageListItemContainer message={message} />
                    <div ref={this.bottom} />
                </li>
            )
        })

        return (
            <div>
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