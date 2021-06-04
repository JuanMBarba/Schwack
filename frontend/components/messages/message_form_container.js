import MessageForm from "./message_form";
import { connect } from "react-redux";
import { createMessage } from "../../actions/message";

const mSTP = (state) => {
    return {
        
    }
} 

const mDTP = (dispatch) => {
    return {
        createMessage: message => dispatch(createMessage(message))
    }
} 

export default connect(mSTP, mDTP)(MessageForm)