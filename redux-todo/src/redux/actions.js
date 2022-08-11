export const addAction = (data) => {
    return {
        type: 'todos/todoAdded',
        payload: data
    }
}
export const deleteAction = (data) => {
    return {
        type: 'todos/todoDeleted',
        payload: data
    }
}