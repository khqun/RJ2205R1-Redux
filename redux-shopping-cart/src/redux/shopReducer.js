const initalState = {
    products: [],
    cart: [],
    quantity: 0
}
const shopReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = state.products.find(prod => prod.id === action.payload.id);
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
            console.log(state.cart);
            return {
                ...state, quantity: state.quantity + 1, cart: inCart ?
                    state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                    : [...state.cart, { ...item, qty: 1 }]
            }
        case 'REMOVE_FROM_CART':
            const rmItem = state.cart.find((item) => item.id === action.payload.id);
            return {
                ...state,
                quantity: state.quantity - rmItem.qty,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}
export default shopReducer