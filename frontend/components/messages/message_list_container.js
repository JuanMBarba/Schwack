import { connect } from "react-redux";
import { fetchMessages, receiveMessage, removeMessage} from "../../actions/message";
import { fetchUsers } from "../../actions/user";
import MessageList from "./message_list";
import { withRouter } from "react-router-dom";
import { getChannelMessages } from "../../reducers/selectors";


const mSTP = (state, ownProps) => {
    // console.log(ownProps);
    return {
        users: state.entities.users,
        // messages: state.entities.messages,
        messages: getChannelMessages(state.entities.messages, ownProps.match.params.channelId),
        currentUserId: state.session.id
    }
}
const mDTP = (dispatch) => {
    return {
        fetchMessages: () => dispatch(fetchMessages()),
        fetchUsers: () => dispatch(fetchUsers()),
        receiveMessage: message => dispatch(receiveMessage(message)),
        removeMessage: messageId => dispatch(removeMessage(messageId)),
        
    }
}

export default withRouter(connect(mSTP, mDTP)(MessageList));