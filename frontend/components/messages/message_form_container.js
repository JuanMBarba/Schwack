import MessageForm from "./message_form";
import { connect } from "react-redux";
import { createMessage, updateMessage } from "../../actions/message";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    // console.log(ownProps.match.params.channelId);
    return {
        message: {
            id: ownProps.message ? ownProps.message.id : "",
            userId: state.session.id,
            channelId: ownProps.match.params.channelId,
            body: ownProps.message ? ownProps.message.body : ""
        },
        editing: ownProps.message ? true : false
    }
} 

const mDTP = (dispatch) => {
    return {
        createMessage: (message, channelId) => dispatch(createMessage(message, channelId)),
        updateMessage: (message, channelId) => dispatch(updateMessage(message, channelId))
    }
} 

export default withRouter(connect(mSTP, mDTP)(MessageForm));