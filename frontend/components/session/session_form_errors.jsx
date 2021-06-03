import React from "react";

const SessionFromErrors = (props) => {
    return (
        <div className="form-errors">
            <ul>
                {props.errors.map((error, index) => {
                    return <li key={index}>{error}</li>
                })}
            </ul>
        </div>
    )
}

export default SessionFromErrors;