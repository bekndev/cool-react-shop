import ProductVariation from "./ProductVariation";

const ProductVariations = ({variations, handleVariationPrice, currentVariation}) => {
    return (
        <div>
            { variations['colors'] && variations['colors'].map(variation => <ProductVariation variation={variation} key={variation['price']} handleVariationPrice={handleVariationPrice} currentVariation={currentVariation} /> )}
            { variations['sizes'] && variations['sizes'].map(variation => <ProductVariation variation={variation} key={variation['price']} handleVariationPrice={handleVariationPrice} currentVariation={currentVariation} /> )}
        </div>
    )
}

export default ProductVariations;