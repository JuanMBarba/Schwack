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
        // console.log("hello")
        this.props.fetchUsers();
        // this.props.fetchUser(this.props.currentUserId);
        // console.log(this.props)
        const channelIds = this.props.users[this.props.currentUserId].channelIds
        for (let i = 0; i < channelIds.length; i++) {
            App.cable.subscriptions.create(
                { channel: "ChatChannel" , id: channelIds[i]},
                {
                    received: data => {
                        // console.log("received")
                        if (data.type === "REMOVE_MESSAGE") {
                            this.props.removeMessage(data.messageId)
                        }
                        else if (data.message.userId !== this.props.currentUserId) {
                            // console.log("hello")
                            this.props.receiveMessage(data.message);
                        }
                    },
                    speak: function (data) {
                        return this.perform("speak", data);
                    }
                }
            );
        }
        // console.log(App.cable.subscriptions.subscriptions)
        // App.cable.subscriptions.create(
        //     { channel: "ChatChannel" },
        //     {
        //         received: data => {
        //             if (data.type === "REMOVE_MESSAGE") {
        //                 this.props.removeMessage(data.messageId)
        //             }
        //             else if (data.message.userId !== this.props.currentUserId) {
        //                 // console.log("hello")
        //                 this.props.receiveMessage(data.message);
        //             }
        //         },
        //         speak: function (data) {
        //             return this.perform("speak", data);
        //         }
        //     }
        // );
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    channelHeader() {
        if (this.props.currentChannel && this.props.currentChannel.dmChannel){
            //Temporary placeholder, will update to display users in channel
            //instead of channel name
            let displayNames = this.props.getDMDisplayNames(this.props.currentChannel.userIds);
            return (
                <div className="channel-header">
                    {displayNames.length > 1 ? <i className="fas fa-users"></i> : <i className="fas fa-user"></i>} {displayNames.join(", ")}
                </div>
            );

        } else {
            return (
                <div className="channel-header">
                    # {this.props.currentChannel ? this.props.currentChannel.name : ""}
                </div>
            );
        }
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
                    {this.channelHeader()}
                    
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