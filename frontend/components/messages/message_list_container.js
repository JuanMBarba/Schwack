import { connect } from "react-redux";
import { fetchMessages } from "../../actions/message"

const mSTP = (state) => {
    return {
        users: state.entities.users,
        messages: state.entities.messages
    }
}
const mDTP = (dispatch) => {
    return {
        fetchMessages: () => dispatch(fetchMessages())
    }
}

export default connect(mSTP, mDTP)(MessageList);