import { connect } from "react-redux";
import { createMessage, fetchMessages, receiveMessage} from "../../actions/message";
import { fetchUsers } from "../../actions/user";
import MessageList from "./message_list";

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
        receiveMessage: message => dispatch(receiveMessage(message))
    }
}

export default connect(mSTP, mDTP)(MessageList);