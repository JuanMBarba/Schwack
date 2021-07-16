import React from "react";
import { NavLink } from "react-router-dom"
import { getDMChannelUserNames } from "../../reducers/selectors";

class ChannelList extends React.Component {
    componentDidMount(){
        this.props.fetchChannels();
        
    }
    
    render(){
        const { channels } = this.props;
        // console.log(channels);

        let channelList = [];
        let dmList = [];
        Object.values(channels).forEach((channel, index) => {
            // console.log(channel)
            if (channel.dmChannel){
                let displayNames = this.props.getDMDisplayNames(channel.userIds);
                dmList.push(
                    <NavLink key={index} activeClassName="current-channel" to={`/channels/${channel.id}`}>
                        <li key={index}>
                            <div className={`symbol-box${displayNames.length > 1 ? " resize": ""}`}>
                                {displayNames.length > 1 ? <i className="fas fa-users"></i> : <i className="fas fa-user"></i>}
                            </div>
                            <span>{displayNames.join(", ")}
                            </span>
                            <div className="tooltiptext">{displayNames.join(", ")}</div>
                        </li>
                    </NavLink >
                )
            }
            else{
                channelList.push(
                    <NavLink key={index} activeClassName="current-channel" to={`/channels/${channel.id}`}>
                        <li key={index}>
                            <div className="symbol-box">#</div>
                            {channel.name}
                        </li>
                    </NavLink >
                )
            }
        })

        return (
            <div className="channel-list-container">
                <div className="workspace-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Solid_unicursal_hexagram.svg/1280px-Solid_unicursal_hexagram.svg.png" src-alt="logo img" />
                    <h2>schwack</h2>
                </div>
                <div className="lower-channel-list">
                    <NavLink activeClassName="browsing" to="/channels/browse-channels">
                        <div onClick={() => this.props.fetchChannels()}className="browse-channel-link">
                            Browse Channels
                        </div>
                    </NavLink>
                    <div className="channel-list-header">
                        Channels
                    </div>
                    <ul className="channel-list">
                        {channelList}
                        <li onClick={() => this.props.switchModalActivity()} className="add-channel-button">
                            <div className="symbol-box">+</div>
                            Add channels
                        </li>
                    </ul>
                    <div className="channel-list-header">
                        Direct Messages
                    </div>
                    <ul className="channel-list">
                        {dmList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ChannelList;