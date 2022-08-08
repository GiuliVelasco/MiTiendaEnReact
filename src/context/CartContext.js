import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider =({ children }) => {
    const [cart, setCart] = useState([])

    //const isInCart = {} => {}

    //const clearCart = {} => {
    //    setCart{[]}
    //}

    //const addToCart =(item, quantity) => {
    //    setCart([...cart, {...item, quantity}])
    //}

    //const removeToCart = () => {}

    const valueToShare = {
        cart, 
        cantInCart: cart.length,
        //isInCart,
        //addToCart,
        //cleanCart,
        //removeToCart
    }

    return (
        <CartContext.Provider value={valueToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider