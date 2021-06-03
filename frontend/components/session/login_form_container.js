import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, resetSessionErrors } from "../../actions/session";

const mSTP = (state) => {
    return {
        errors: state.errors.session,
        formType: "Login"
    }
}

const mDTP = (dispatch) => {
    return {
        formAction: user => dispatch(login(user)),
        demoAction: user => dispatch(login(user)),
        resetErrors: () => dispatch(resetSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);