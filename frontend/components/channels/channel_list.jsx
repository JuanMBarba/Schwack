import React from "react";
import { Link } from "react-router-dom"

class ChannelList extends React.Component {
    componentDidMount(){
        this.props.fetchChannels();
    }
    
    render(){
        const { channels } = this.props;
        let channel_list = Object.values(channels).map((channel, index) => {
            return (
                <li key={index}>
                    <Link to={`/channels/${channel.id}`}>{channel.name}</Link>
                </li>
            )
        })
        return (
            <div className="channel-list-container">
                <div className="workspace-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Solid_unicursal_hexagram.svg/1280px-Solid_unicursal_hexagram.svg.png" src-alt="logo img" />
                    <h2>schwack</h2>
                </div>
                <ul className="channel-list">
                    {channel_list}
                </ul>
            </div>
        )
    }
}

export default ChannelList;