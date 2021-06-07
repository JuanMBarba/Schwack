import MessageForm from "./message_form";
import { connect } from "react-redux";
import { createMessage, updateMessage } from "../../actions/message";

const mSTP = (state, ownProps) => {
    return {
        message: {
            id: ownProps.message ? ownProps.message.id : "",
            userId: state.session.id,
            channelId: 1,
            body: ownProps.message ? ownProps.message.body : ""
        },
        editing: ownProps.message ? true : false
    }
} 

const mDTP = (dispatch) => {
    return {
        createMessage: message => dispatch(createMessage(message)),
        updateMessage: message => dispatch(updateMessage(message))
    }
} 

export default connect(mSTP, mDTP)(MessageForm)