import MessageForm from "./message_form";
import { connect } from "react-redux";
import { createMessage } from "../../actions/message";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
} 

const mDTP = (dispatch) => {
    return {
        createMessage: message => dispatch(createMessage(message))
    }
} 

export default connect(mSTP, mDTP)(MessageForm)