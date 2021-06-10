import React from "react";
import { NavLink } from "react-router-dom"

class ChannelList extends React.Component {
    componentDidMount(){
        this.props.fetchChannels();
        
    }
    
    render(){
        const { channels } = this.props;
        let channel_list = Object.values(channels).map((channel, index) => {
            return (
                <NavLink key={index} activeClassName="current-channel" to={`/channels/${channel.id}`}>
                    <li key={index}>
                        <div className="symbol-box">#</div>
                        {channel.name}
                    </li>
                </NavLink >
            )
        })
        return (
            <div className="channel-list-container">
                <div className="workspace-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Solid_unicursal_hexagram.svg/1280px-Solid_unicursal_hexagram.svg.png" src-alt="logo img" />
                    <h2>schwack</h2>
                </div>
                <div className="channel-list-header">
                    Channels
                </div>
                <ul className="channel-list">
                    {channel_list}
                    <li className="add-channel-button">
                        <div className="symbol-box">+</div>
                        Add channels
                    </li>
                </ul>
            </div>
        )
    }
}

export default ChannelList;