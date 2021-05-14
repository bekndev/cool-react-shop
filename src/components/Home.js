import ProductList from "./ProductList"
import { useSelector } from "react-redux";
import ProductFilter from "./ProductFilter";

const Home = () => {
    const { products, categories, currentCategory } = useSelector(state => state.shopReducer);

    return (
        <div className="main">
            <h1>Home</h1>
            { categories && <ProductFilter categories={categories} currentCategory={currentCategory} /> }
            { products ? <ProductList products={products} /> : <p>No products</p> }
        </div>
    )
}

export default Home