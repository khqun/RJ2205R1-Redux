export const addToCart = (itemId) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: itemId
        }
    }
}
export const removeFromCart = (itemId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            id: itemId
        }
    }
}
export const getProductAPI = (data) => {
    return {
        type: 'GET_PRODUCTS',
        payload: data
    }
}