const initalState = {
    message: ''
}
export const messageReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            state.message = action.payload
            console.log(state.message );
            return state
        default:
            return state
    }
}