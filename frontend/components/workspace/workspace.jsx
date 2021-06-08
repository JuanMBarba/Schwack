import React from "react"
import MessageListContainer from "../messages/message_list_container";
import { logout } from "../../actions/session";

class Workspace extends React.Component {
    render(){
        return (
            <div className="workspace-page">
                {/* Need headers here */}
                {/* <ChannelSidebarContainer /> */}
                <MessageListContainer />
            </div>
        )
    }
}

export default Workspace;