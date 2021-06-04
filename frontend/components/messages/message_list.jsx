import React from "react";
import MessageForm from "./message_form"

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

                    if (data.message.userId !== this.props.currentUser.id){

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
                    {message.userId}: {message.body}
                    <div ref={this.bottom} />
                </li>
            )
        })

        return (
            <div>
                <div ref={this.bottom} />
                <div className="message-list">
                    {messageList}
                </div>
                <MessageForm createMessage={this.props.createMessage} currentUser={this.props.currentUser} />
            </div>
        )
        
    }
}

export default MessageList;