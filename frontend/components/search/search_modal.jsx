import React from "react";

class SearchModal extends React.Component {

    render(){
        return (
            <div className={`modal${this.props.modalActive ? " active" : ""}`}>
                <div onClick={() => this.props.switchModalActivity()} className="modal-screen transparent"></div>
                <div className="modal-search">
                    {/* <input type="text" name="search-bar" id="search-bar" /> */}
                    YESSS
                </div>
            </div>
        )
    }
}

export default SearchModal