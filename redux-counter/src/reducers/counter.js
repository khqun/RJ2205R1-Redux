const initalState = {
    num: 0 
}
const counterReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
export default counterReducer