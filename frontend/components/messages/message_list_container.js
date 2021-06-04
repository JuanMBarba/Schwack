import { connect } from "react-redux";
import { createMessage, fetchMessages } from "../../actions/message"
import MessageList from "./message_list"

const mSTP = (state) => {
    return {
        users: state.entities.users,
        messages: state.entities.messages,
        currentUser: state.entities.users[state.session.id]
    }
}
const mDTP = (dispatch) => {
    return {
        fetchMessages: () => dispatch(fetchMessages()),
        createMessage: message => dispatch(createMessage(message))
    }
}

export default connect(mSTP, mDTP)(MessageList);