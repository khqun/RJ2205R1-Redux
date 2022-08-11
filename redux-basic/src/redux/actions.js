export default function showMessage(data) {
    return {
        type: 'SET_MESSAGE',
        payload: data
    }
}