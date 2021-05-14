import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart, cartTotalCount } from "../store/actions/shopActions";
import store from "../store";

const Nav = () => {
    const cartTotalCount = store.getState().shopReducer.cartTotalCount;
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/cart">Cart {cartTotalCount > 0 && <span className="badge">{cartTotalCount}</span>}</NavLink></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        cartTotalCount: state.shopReducer.cartTotalCount
    }
}

const mapDispatchToProps = { removeFromCart, cartTotalCount }

export default connect(mapStateToProps, mapDispatchToProps)(Nav)