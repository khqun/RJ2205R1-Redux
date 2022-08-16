const initalState = {
    table: [],
    user: ''
}

const userReducer = (state = initalState, action) => {

    switch (action.type) {
        case "CHECK_ADMIN":
            return {
                ...state, user: action.payload
            }
        case "GET_USER":
            return {
                ...state, table: action.payload
            }
        case "REMOVE_USER":
            return {
                ...state, table: state.table.filter(user => user.id !== action.payload.id)
            }
        default: 
        return state
    }
}
export default userReducer