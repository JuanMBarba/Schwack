import React from "react";

class DirectMessage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: "",
            searched: [],
            selected: {}
        }
        this.update = this.update.bind(this);
    }

    update(e){
        e.preventDefault();
        this.setState({searchTerm: e.currentTarget.value});
        this.setState({searched: this.props.searchUsers(e.currentTarget.value) })
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    addSelected(user){
        let selected = this.state.selected;
        selected[user.id] = user;
        this.setState({selected, searchTerm: ""});
    }

    removeSelected(user) {
        let selected = this.state.selected;
        delete selected[user.id];
        this.setState({ selected });
    }

    render(){

        let searchedUsers = this.state.searched.map((user, idx) => {
            return (
                <li key={idx}
                    onClick={() => this.addSelected(user)}>
                    <i className="fas fa-user"></i>
                    <p>{user.displayName}</p>
                    
                </li>
            )
        })

        let selectedUsers = Object.values(this.state.selected).map((user, idx) => {
            return (
                <li key={idx}>
                    <i className="fas fa-user"></i>
                    <p>{user.displayName}</p>
                    <strong onClick={() => this.removeSelected(user)}>✕</strong>
                </li>
            )
        })

        // console.log(this.state)

        return (
            <div className="message-list-container">
                <div className="channel-header">
                    {Object.keys(this.state.selected).length > 0 ? <h2>New Message</h2> : <h2>Send Direct Message</h2>}
                </div>
                <div className="channel-header dm-search">
                    <h2>To: </h2> 
                
                    <ul className="selected-users">
                        {selectedUsers}
                    </ul>
                    <input 
                        onChange={this.update}
                        type="text" 
                        name="search" 
                        placeholder="Enter Display Name" 
                        value={this.state.searchTerm}/>
                    
                    <ul className={`searched-items ${this.state.searchTerm.length > 0 ? "" : "hidden" }`}>
                        {/* <li>Hello</li>
                        <li>This</li>
                        <li>Is</li>
                        <li>A</li>
                        <li>Test</li> */}
                        {searchedUsers}
                        {this.state.searched.length === 0 ? (<li><p>No matching search results</p></li>) : ""}
                    </ul>
                    
                </div>

                <div className="dm-spacer">
                
                </div>

                <div className="message-form-container">
                    <form 
                    // onSubmit={this.handleSubmit}
                    >
                        <input
                            type="text"
                            value={this.state.body}
                            // onChange={this.update("body")}
                            placeholder="Send a message"
                        />
                        <button>►</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DirectMessage;