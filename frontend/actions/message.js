import * as MessageAPIUtil from "../util/message_api";

export const RECEIVE_MESSAGES =  "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE =  "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

//Action Creators

const receiveMessages = (messages) => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGES,
        message
    }
}

const removeMessage = (messageId) => {
    return {
        type: REMOVE_MESSAGE,
        messageId
    }
}

const receiveMessageErrors = (errors) => {
    return {
        type: RECEIVE_MESSAGE_ERRORS,
        errors
    }
}

//Thunk Action Creators



