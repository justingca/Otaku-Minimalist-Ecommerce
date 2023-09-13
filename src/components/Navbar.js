import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"
import { useCartContext } from "../hooks/useCartContext";
import ProductDetails from "./ProductDetails";
const NavigationMenu = () => {
    const refNavMenu = useRef();
    const refBurger = useRef();
    const refXMark = useRef();
    const refCart = useRef();
    const refCartMenu = useRef();
    const {cart, dispatch} = useCartContext();

    const handleBurger = () => {
        const visibility = refNavMenu.current.getAttribute('data-visible');
        if(visibility === "false") {
            refNavMenu.current.setAttribute('data-visible', true)
            refBurger.current.setAttribute('data-visible', true);
            refXMark.current.setAttribute('data-visible', true);
        }
        else {
            refNavMenu.current.setAttribute('data-visible', false)
            refBurger.current.setAttribute('data-visible', false);
            refXMark.current.setAttribute('data-visible', false);
        }
    }

    const handleCartMenu = () => {
        const visibility = refCartMenu.current.getAttribute('data-visible');

        if(visibility === "false") {
            refCartMenu.current.setAttribute('data-visible', true);
        }
        else if (visibility === "true") {
            refCartMenu.current.setAttribute('data-visible', false);
        }
    }

    const handleClearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    return (
        <nav className="navbars">
            <div className="navBrand">
                <div>オタク</div>
                <div className="navBrand-lower">ミニマリスト</div>
            </div>
            <div className="mobile-nav-toggle" >
                <FontAwesomeIcon icon={faBars} onClick={handleBurger} ref={refBurger} data-visible="false" className="burgerButton"/>
                <FontAwesomeIcon icon={faXmark} onClick={handleBurger} ref={refXMark} data-visible="false" className="xButton"/>
            </div>
            <ul className="navi-menu" ref={refNavMenu} data-visible="false"> 
                <li className="navi-item">
                    <a href="/" className="navi-link">Home</a>
                </li>
                <li className="navi-item">
                    <a href="/products/all/" className="navi-link">Products</a>
                </li>      
            </ul>
            <div className="navBar-cart">
                <FontAwesomeIcon icon={faCartShopping} ref={refCart} onClick={handleCartMenu}/>
            </div>

            <div className="cart-menu" ref={refCartMenu} data-visible="false">
                <h1>CART</h1>
                {cart.products && cart.products.map(p => (
                    <div>{p.product.name} Qty: {p.quantity}</div>
                ))}
                <div>total: {cart.total}</div>
                <button onClick={handleClearCart}>CLEAR CART</button>
            </div>
        </nav>
    )
}

export default NavigationMenu