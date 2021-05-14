import { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from "../store";
import { addToCart, cartTotalCount, cartTotalSum } from "../store/actions/shopActions";
import ProductVariations from "./ProductVariations";

const ProductDetail =  ({product: {id, title, body, variations, price}}) => {
    const [currentPrice, setCurrentPrice] = useState(0);
    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentVariation, setCurrentVariation] = useState();
    let count = 1;
    const cartItems = store.getState().shopReducer.cartItems;
    const alreadyAdded = cartItems.find(item => item.id === id);
    // console.log(`${id} created`);
    // variations && console.log(variations);

    useEffect(() => {
        // console.log(`${id} mounted`);
        if(variations) {
            if(variations.colors) {
                setCurrentTitle(`${title} (color: ${variations.colors[0].color})`);
                price = variations.colors[0].price;
                setCurrentVariation(variations.colors[0]);
            } else if(variations.sizes) {
                setCurrentTitle(`${title} (size: ${variations.sizes[0].size})`);
                price = variations.sizes[0].price;
                setCurrentVariation(variations.sizes[0]);
            }
        }
        setCurrentPrice(price);
    }, []);

    const handleClick = () => {
        // const cartItems = store.getState().shopReducer.cartItems;
        // const alreadyAdded = cartItems.find(item => item.id === id);
        // if(alreadyAdded) {
        //     count = alreadyAdded.count + 1;
        //     store.dispatch(updateCartItem(id, count));
        // } else {

            const product = {id, title: currentTitle, price: currentPrice, count};
            // console.log(product);
            store.dispatch(addToCart(product));
        // }
        store.dispatch(cartTotalCount());
        store.dispatch(cartTotalSum());
    }

    const handleVariationPrice = (variation) => {
        // console.log(variation);
        if(variation.color) {
            setCurrentTitle(`${title} (color: ${variation.color})`);
            setCurrentVariation(variation);
        }
        if(variation.size) {
            setCurrentTitle(`${title} (size: ${variation.size})`);
            setCurrentVariation(variation);
        }
        
        setCurrentPrice(variation.price);
    }

    return (
        <div className="product-card">
            <div className="product-title">{ currentTitle }</div>
            <div className="product-text">{ body }</div>
            <div className="product-variations">
                { variations && <ProductVariations variations={variations} handleVariationPrice={handleVariationPrice} currentVariation={currentVariation} /> }
            </div>
            <div className="product-price">
                <div>${ currentPrice }</div>
                { alreadyAdded ? <button disabled>Already in Cart</button> : <button className="add-to-cart" onClick={handleClick}>Buy</button> }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shopReducer.cartItems
    }
}

export default connect(mapStateToProps)(ProductDetail);