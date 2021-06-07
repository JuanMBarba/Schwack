import { connect } from "react-redux";
import MessageListItem from "./message_list_item";
import { fetchUser } from "../../actions/user"
import { deleteMessage } from "../../actions/message";

const mSTP = (state, ownProps) => {
    return {
        users: state.entities.users,
        message: ownProps.message,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        deleteMessage: messageId => dispatch(deleteMessage(messageId))
    }
}

export default connect(mSTP, mDTP) (MessageListItem)