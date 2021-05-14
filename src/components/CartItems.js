import store from "../store";
import { cartCheckout, cartTotalCount } from "../store/actions/shopActions";
import CartItem from "./CartItem"

const CartItems = ({items}) => {
    const cartTotalSum = store.getState().shopReducer.cartTotalSum;

    const handleCheckout = () => {
        store.dispatch(cartCheckout());
        store.dispatch(cartTotalCount());
    }

    return (
        <>
        <div className="cart-items">
            {items.map(item => <CartItem item={item} key={item.id} />)}
        </div>
        <div className="cart-total">Total: <b>${cartTotalSum}</b></div>
        <div className="cart-checkout"><button onClick={handleCheckout}>Checkout</button></div>
        </>
    )
}

export default CartItems;