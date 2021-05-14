import { useState } from "react";
import store from "../store";
import { removeFromCart, cartTotalCount, cartTotalSum, updateCartItem } from "../store/actions/shopActions";

const CartItem = ({item}) => {
    const [count, setCount] = useState(item.count);
    const handleClick = () => {
        store.dispatch(removeFromCart(item.id));
        store.dispatch(cartTotalCount());
        store.dispatch(cartTotalSum());
    }

    const handleCount = (e) => {
        let count = item.count;
        if(e.target.innerText === '+') {
            count++;
        } else {
            count--;
        }
        count = count ? count : 1;
        setCount(count);
        store.dispatch(updateCartItem(item.id, count));
        store.dispatch(cartTotalCount());
        store.dispatch(cartTotalSum());
    }

    return (
        <div className="cart-item">
            <div className="cart-item-title">{ item.title }</div>
            <div className="cart-item-count"><i className="minus" onClick={handleCount}>-</i>{ count }<i className="plus" onClick={handleCount}>+</i></div>
            <div className="cart-item-price">${ item.price }</div>
            <div className="cart-item-remove"><button onClick={handleClick}>x</button></div>
        </div>
    )
}

export default CartItem;