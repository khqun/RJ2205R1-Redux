export const increment = (inp = 1) => {
    return {
        type: 'INCREMENT',
        payload: inp
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
