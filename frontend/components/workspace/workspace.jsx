import React from "react"
import MessageListContainer from "../messages/message_list_container";

class Workspace extends React.Component {
    render(){
        return (
            <div className="workspace-page">
                {/* Need headers here */}
                <div className="workspace-header">
                    <button className="header-button" onClick={() => this.props.logout()}>LOGOUT</button>
                </div>
                {/* <ChannelSidebarContainer /> */}
                <MessageListContainer />
            </div>
        )
    }
}

export default Workspace;