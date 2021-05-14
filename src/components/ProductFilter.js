import { useState } from "react";
import store from "../store";
import { getFilteredProducts, setCurrentCategory } from "../store/actions/shopActions";

const ProductFilter = ({categories, currentCategory}) => {
    const handleClick = (category) => {
        store.dispatch(getFilteredProducts(category));
        store.dispatch(setCurrentCategory(category));
    } 

    return ( 
        <div className="filter-block">
            Filter: <button onClick={() => handleClick('all')} className={currentCategory==='all' ? 'active': ''}>All</button>
            {categories.map(category => <button key={ category.id } onClick={() => handleClick(category.name)} className={currentCategory===category.name ? 'active': ''}>{ category.name }</button>)}
        </div>
     );
}
 
export default ProductFilter;