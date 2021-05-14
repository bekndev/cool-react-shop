import store from "../store";
import CartItems from "./CartItems";
import { connect } from "react-redux";
// import { removeFromCart } from "../store/actions/shopActions";

const Cart = () => {
    const cartItems = store.getState().shopReducer.cartItems;
    return (
        <div className="main">
            <h1>Cart</h1>
            { cartItems.length > 0 ? <CartItems items={cartItems} /> : <p>Cart is empty</p> }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shopReducer.cartItems
    }
}
  

// const mapDispatchToProps = { removeFromCart }

export default connect(mapStateToProps)(Cart)