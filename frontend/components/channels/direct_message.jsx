import React from "react";

class DirectMessage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        }
        this.update = this.update.bind(this);
    }

    update(e){
        e.preventDefault();
        this.setState({searchTerm: e.currentTarget.value});
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        return (
            <div className="message-list-container">
                <div className="channel-header">
                    <h2>Send Direct Message</h2>
                </div>
                <div className="channel-header dm-search">
                    <h2>To: </h2> 

                    <div>
                        <input 
                            onChange={this.update}
                            type="text" 
                            name="search" 
                            placeholder="Enter Display Name" 
                            value={this.state.searchTerm}/>
                        
                        <ul className="searched-items">
                            <li>Hello</li>
                            <li>This</li>
                            <li>Is</li>
                            <li>A</li>
                            <li>Test</li>
                        </ul>
                    </div>
                </div>

                <ul className="browse-channel-list">
                    <li></li>
                </ul>

                
            </div>
        )
    }
}

export default DirectMessage;