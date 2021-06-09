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
        this.props.fetchUser(this.props.currentUserId);

        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    if (data.type === "REMOVE_MESSAGE") {
                        this.props.removeMessage(data.messageId)
                    }
                    else if (data.message.userId !== this.props.currentUserId){
                        console.log("hello")
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
        
        const messageList = messages.map((message, index) => {
            return (
                <li key={index}>
                    <MessageListItemContainer message={message}/>
                    {/* <div ref={this.bottom} /> */}
                </li>
            )
        })
        // console.log(this.props)
        return (
            // Made a temp div in order to have a header here
            // will move later when I have a component that encapsulates
            // this one
            // <div className="temp-div">
                // {/* tempheader for logout */}
                // {/* <div className="workspace-header"> */}
                //         {/* <button className="header-button" onClick={() => this.props.logout()}>LOGOUT</button> */}
                // {/* </div> */}
                <div className="message-list-container">
                    <div className="channel-header">
                    # {this.props.currentChannel ? this.props.currentChannel.name : ""}
                    </div>
                    
                    <ul className="message-list">
                        {messageList}
                        <div ref={this.bottom} />
                    </ul>
                    
                    <MessageFormContainer />
                </div>
            // {/* </div> */}
        )
        
    }
}

export default MessageList;