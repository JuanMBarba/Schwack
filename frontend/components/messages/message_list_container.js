import { connect } from "react-redux";
import { fetchMessages, receiveMessage, removeMessage} from "../../actions/message";
import { fetchUsers } from "../../actions/user";
import MessageList from "./message_list";
import {logout} from "../../actions/session"

const mSTP = (state) => {
    return {
        users: state.entities.users,
        messages: state.entities.messages,
        currentUserId: state.session.id
    }
}
const mDTP = (dispatch) => {
    return {
        fetchMessages: () => dispatch(fetchMessages()),
        fetchUsers: () => dispatch(fetchUsers()),
        receiveMessage: message => dispatch(receiveMessage(message)),
        removeMessage: messageId => dispatch(removeMessage(messageId)),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(MessageList);