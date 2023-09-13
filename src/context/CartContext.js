import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("otakuCart");
    if (!localCartData) {
        return {
            total: "0",
            products: []
        }
    }
    else {
        return JSON.parse(localCartData);
    }
}

const initialCartState = {
    cart: getLocalCartData()
}

export const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            console.log(state.cart); 
            return {
                cart: {
                    total: state.cart.total + action.payload.total,
                    products: [action.payload.product, ...state.cart.products]
                }
            }
        case 'CLEAR_CART':
            return {
                cart: {total: 0, products: []}
            }
        default:
            return state
    }
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState)

    useEffect(() => {
        localStorage.setItem("otakuCart", JSON.stringify(state.cart))
    }, [state.cart]);

    return (
        <CartContext.Provider value={{...state, dispatch}}>
            {children}
        </CartContext.Provider>
    )

}