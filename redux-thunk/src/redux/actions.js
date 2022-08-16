export const checkAdmin = (payload) => {
    return {
        type: 'CHECK_ADMIN',
        payload
    }
}
export const removeUser = (userId) => {
    return {
        type: 'REMOVE_USER',
        payload: {
            id: userId
        }
    }
}
export const getUserAPI = (data) => {
    return {
        type: "GET_USER",
        payload: data
    }
}