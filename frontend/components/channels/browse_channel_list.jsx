import React from "react";


class BrowseChannelList extends React.Component {
    constructor(props){
        super(props)
        this.handleJoin = this.handleJoin.bind(this)
    }

    handleJoin(channelId){
        return e => {
            e.preventDefault()
            this.props.createMembership(this.props.currentUserId, channelId)
        }  
    }

    render(){

        const channelList = this.props.channels.map((channel, index) => {
            return (
                <li key={index} className="browse-channel-list-item">
                    <div className="channel-name-description">
                        <h2>
                            {channel.name}
                        </h2>
                        <p>
                            {channel.description}
                        </p>
                    </div>
                    {this.props.usersChannels.includes(channel.id) ? <button className="join-button joined">Joined</button> : <button onClick={this.handleJoin(channel.id)} className="join-button">Join</button>}
                </li>
            )
        })

        return (
            <div className="message-list-container">
                <div className="channel-header">
                   Channel Browser
                </div>

                <ul className="browse-channel-list">
                    {channelList}
                </ul>

                {/* <MessageFormContainer /> */}
            </div>
        )
    }
}

export default BrowseChannelList;