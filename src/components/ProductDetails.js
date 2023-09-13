const ProductDetails = ({product}) => {
    return (
        <div className="col-12 col-sm-6 col-md-3 product-container">
            <a href={`/products/${product.id}`}>
                <div className="product-details-image">
                    <img src={product.images[0]} alt=""/>
                </div>
            </a>
            <div className="product-details-name">
                {product.name}
            </div>
            <div className="product-details-price">
                Php {product.price}
            </div>
        </div>
    )
}

export default ProductDetails