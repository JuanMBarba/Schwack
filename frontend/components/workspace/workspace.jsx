import React from "react"
import {Switch, Redirect, NavLink} from "react-router-dom";
import MessageListContainer from "../messages/message_list_container";
import ChannelListContainer from "../channels/channel_list_container"
import ChannelFormContainer from "../channels/channel_form_container"
import { defaultMemberships } from "../../util/membership_api";
import {ProtectedRoute }from "../../util/route";
import BrowseChannelListContainer from "../channels/browse_channel_list_container";
import DirectMessageContainer from "../channels/direct_message_container";
// import SearchModalContainer from "../search/search_modal_container";

class Workspace extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: {
                modalActive: false
            },
            channel: {
                modalActive: false
            }
        }
        this.switchModalActivity = this.switchModalActivity.bind(this);
    }

    switchModalActivity(field){
        let newField = Object.assign({}, this.state[field]);
        newField.modalActive = !newField.modalActive;
        // console.log(field);
        // console.log(newField);
        this.setState({[field]: newField});//May be a problem
        // console.log(this.state);
    }

    componentDidMount() {
        // this.props.fetchChannels();
        // this.props.fetchUser(this.props.currentUserId);
        if (!this.props.currentUserFirstChannel){
            defaultMemberships(this.props.currentUserId)
                .then(() => this.props.fetchUser(this.props.currentUserId))
                .then(() => this.setState({}))
        }
    }
    renderRedirect(){
        if (this.props.channelId){
            return ""; //(<Redirect to={`/channels/${this.props.channelId}`} />)
        }
        else if (this.props.currentUserFirstChannel){
            return <Redirect path to={`/channels/${this.props.currentUserFirstChannel}`} />
        }
        else{
            return ""
        }
    }

    render(){
        // console.log(this.props)
        return (
            <div className="workspace-page">
                {/* { this.props.channelId ? "" : <Redirect to="/channels/1" />} */}
                {/* {console.log(this.props.currentUserFirstChannel)} */}
                {/* { this.props.currentUserFirstChannel ? <Redirect to={`/channels/${this.props.currentUserFirstChannel}`} /> : ""} */}
                {this.renderRedirect()}
                {/* <Redirect to="/channels/1" /> */}
                {/* Need headers here */}
                <div className="workspace-header">
                    {/* <NavLink > */}
                        <NavLink className="search-bar" to="/channels/direct-message"
                        // onClick={() => this.switchModalActivity("search")}
                        >
                        <i className="fas fa-search"></i> Search Schwack
                        {/* <SearchModalContainer modalActive={this.state["search"].modalActive} switchModalActivity={() => this.switchModalActivity("search")} /> */}
                    </NavLink>
                    {/* </NavLink> */}
                    <strong className="workspace-welcome">Welcome, {this.props.currentUser.displayName}</strong>
                    <button className="header-button" onClick={() => this.props.logout()}>LOGOUT</button>
                </div>
                <div className="workspace-body">
                    <ChannelListContainer switchModalActivity={() => this.switchModalActivity("channel")} />
                    <Switch>
                        <ProtectedRoute exact path="/channels/browse-channels" component={BrowseChannelListContainer}/>
                        <ProtectedRoute exact path="/channels/direct-message" component={DirectMessageContainer} />
                        <ProtectedRoute exact path="/channels/:channelId" component={MessageListContainer}/>
                    </Switch>
                    {/* <MessageListContainer /> */}
                </div>
                {/* <div className=".modal">
                    <div class="modal-screen"></div>
                </div> */}
                <ChannelFormContainer modalActive={this.state["channel"].modalActive} switchModalActivity={() => this.switchModalActivity("channel")}/>
            </div>
        )
    }
}

export default Workspace;