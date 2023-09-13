import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../allProducts";
import ProductDetails from "./ProductDetails";
import { useCartContext } from "../hooks/useCartContext";

const ProductShowPage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [displayImage, setDisplayImage] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { cart, dispatch } = useCartContext();

    useEffect(() => {
        const fetchProduct = () => {
            setProduct(productList[productId - 1]);
            setDisplayImage(productList[productId - 1].images[0]);
            setImages(productList[productId - 1].images);
            setPrice(productList[productId - 1].price);
        }
        fetchProduct();
    }, [productId])

    const relatedProducts = productList.filter(p => p.id < 5);

    const handleDecrement = () => {
        setQuantity(quantity - 1);
        setPrice(price - (price / quantity));
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        setPrice(price + (price / quantity));
    }

    const imageHover = (ev) => {
        setDisplayImage(ev.target.src);
    }

    const handleAddToCart = () => {
        dispatch({type: 'ADD_TO_CART', payload: {
            total: price,
            product: {product, quantity: quantity}
        }})
    }
    

    return (
        <main>
            {product && (
                <div className="container d-flex justify-content-center align-items-center">    
                    <div className="row w-100 product-show-row">
                        <div className="col-12 col-md-6 product-show-left">
                            <img className="product-main-img" src={displayImage} alt=""/>
                            <div className="row product-alt-images">
                                {images && images.map(image => (
                                    <img onMouseOver={imageHover} src={image} alt=""/>
                                ))}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 product-show-right">
                            <h1 className="mt-3">{product.name}</h1>
                            <h5 className="mt-3">Product Description</h5>
                            <p className="mt-3">{product.description}</p>
                            <div className="product-show-qty">
                                <span className="me-auto ms-5 fs-3">Quantity</span>
                                <button onClick={handleDecrement} disabled={quantity === 1}>-</button>
                                <input type="number"
                                    value={quantity}
                                    onChange={ev => setQuantity(ev.target.value)}
                                    disabled={quantity}
                                />
                                <button onClick={handleIncrement}>+</button>
                                <span className="ms-auto me-5 fs-3">P{price}</span>
                            </div>
                            <div className="product-show-buttons gap-5">
                                <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                                <button className="buy-now-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            )}

            <div className="container mt-5 mb-5">
                <div className="row">
                    <h1>Related  Products</h1>
                </div>
                <div className="row featured-products">
                    {relatedProducts && relatedProducts.map(p => (
                        <ProductDetails product={p}/>
                    ))}
                </div>
            </div>
            
        </main>
        
    )
}

export default ProductShowPage;