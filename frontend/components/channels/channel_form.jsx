import React from "react";

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.channel;
    }



    render(){
        return (
            <div className=".modal">
                <div class="modal-screen"></div>
                <form onSubmit={}>
                    <label>
                        Name
                        <input type="text" onChange={} placeholder="e.g. project-plans, questions"/>
                    </label>
                    <label>
                        Description
                        <input type="text" onChange={} placeholder="(optional)"/>
                    </label>
                </form>
            </div>
        )
            
    }
}

export default ChannelForm;