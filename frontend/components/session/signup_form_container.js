import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup, resetSessionErrors } from "../../actions/session"

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: "Sign Up"
    }
}

const mDTP = (dispatch) => {
    return {
        formAction: user => dispatch(signup(user)),
        demoAction: user => dispatch(login(user)),
        resetErrors: () => dispatch(resetSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);