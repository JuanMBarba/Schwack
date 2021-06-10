import React from "react";

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.channel;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createChannel(this.state);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }


    render(){
        return (
            <div className=".modal">
                <div class="modal-screen"></div>
                <form onSubmit={this.handleSubmit} className="modal-form">
                    <div className="modal-form-header">
                        <h1>
                            Create a Channel
                        </h1>
                        <div>
                            ×
                        </div>
                    </div>
                    <div className="modal-form-sentence">
                        Channels are where your team communicates.
                    </div>
                    <label>
                        <h2>Name</h2>
                        <input type="text" onChange={this.update("name")} placeholder="e.g. project-plans, questions"/>
                    </label>
                    <label>
                        <div>
                            <h2>Description <strong>(optional)</strong></h2>
                        </div>
                        <input type="text" onChange={this.update("description")} placeholder=""/>
                        <div className="modal-form-sentence">
                            What's this channel about?
                        </div>
                    </label>
                    <button className="modal-form-button">Create</button>
                </form>
            </div>
        )
            
    }
}

export default ChannelForm;