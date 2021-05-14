import ProductDetail from "./ProductDetail";

const ProductList = ({products}) => {
    return (
        <div className="product-list">
            { products.map(product => <ProductDetail product={product} key={product.id} />) }
        </div>
    )
}

export default ProductList;