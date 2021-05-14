const ProductVariation = ({variation, handleVariationPrice, currentVariation}) => {
    const handleClick = () => {
        handleVariationPrice(variation);
    };

    return (
        <button onClick={handleClick} className={currentVariation === variation ? 'active': ''}>
            {variation.color && variation.color}
            {variation.size && variation.size}
        </button>
    )
}

export default ProductVariation;