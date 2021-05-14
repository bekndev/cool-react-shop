const initState = {
    products: [],
    allProducts: [],
    categories: [],
    currentCategory: 'all',
    cartItems: [],
    cartTotalCount: 0,
    cartTotalSum: 0
}

const shopReducer = (state = initState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.products,
                allProducts: action.products
            }
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.categories
            }
        case 'SET_CURRENT_CATEGORY':
            return {
                ...state,
                currentCategory: action.category
            }
        case 'GET_FILTERED_PRODUCTS':
            return {
                ...state,
                products: action.category === 'all' ? state.allProducts : state.allProducts.filter(product => product.category === action.category)
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.product]
            }
        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if(item.id === action.id) {
                        item.count = action.count
                    }
                    return item;
                })
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.id)
            }
        case 'CART_TOTAL_COUNT':
            return {
                ...state,
                cartTotalCount: state.cartItems.reduce((acc, cur) => acc + cur.count, 0)
            }
        case 'CART_TOTAL_SUM':
            return {
                ...state,
                cartTotalSum: Math.ceil(state.cartItems.reduce((acc, cur) => acc + cur.count*cur.price, 0)*100)/100
            }
        case 'CART_CHECKOUT':
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

export default shopReducer;