
export const fetchMessages = () => {
    return $.ajax({
        method: "GET",
        url: "/api/messages"
    })
}

export const createMessage = (message) => {
    console.log(message);
    return $.ajax({
        method: "POST",
        url: "/api/messages",
        data: { message }
    })
}

export const updateMessage = (message) => {
    // debugger
    return $.ajax({
        method: "PATCH",
        url: `/api/messages/${message.id}`,
        data: { message }
    })
}

export const deleteMessage = (messageId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/messages/${messageId}`
    })
}