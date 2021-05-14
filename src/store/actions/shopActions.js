import axios from "axios";
import store from "..";

const getProducts = () => {
    // axios.get('/api/v1/products.json')
    axios.get('http://localhost:5000/products')
        .then(res => {
            store.dispatch({
                type: 'GET_PRODUCTS',
                products: res.data
            })
        })
        .catch(e => console.log(e));
}

const getCategories = () => {
    // axios.get('/api/v1/categories.json')
    axios.get('http://localhost:5000/categories')
        .then(res => {
            store.dispatch({
                type: 'GET_CATEGORIES',
                categories: res.data
            })
        })
        .catch(e => console.log(e));
}

const getFilteredProducts = (category) => {
    return ({
        type: 'GET_FILTERED_PRODUCTS',
        category
    })
}

const setCurrentCategory = (category) => {
    return ({
        type: 'SET_CURRENT_CATEGORY',
        category
    })
}

const addToCart = (product) => {
    return ({
        type: 'ADD_TO_CART',
        product
    })
}

const updateCartItem = (id, count) => {
    return ({
        type: 'UPDATE_CART_ITEM',
        id,
        count
    })
}

const removeFromCart = (id) => {
    return ({
        type: 'REMOVE_FROM_CART',
        id
    })
}

const cartTotalCount = () => {
    return ({
        type: 'CART_TOTAL_COUNT'
    })
}

const cartTotalSum = () => {
    return ({
        type: 'CART_TOTAL_SUM'
    })
}

const cartCheckout = () => {
    return ({
        type: 'CART_CHECKOUT'
    })
}

export { getProducts, getCategories, getFilteredProducts, setCurrentCategory, addToCart, updateCartItem, removeFromCart, cartTotalCount, cartTotalSum, cartCheckout }