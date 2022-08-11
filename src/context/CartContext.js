import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider =({ children }) => {
    const [cart, setCart] = useState([])

    //const isInCart = {} => {}

    //const clearCart = {} => {
    //    setCart([])
    //}

    const addToCart =(item, quantity) => {
        console.log({item, quantity})
        //verifico si el carrito está vacío
        if(cart.length === 0) {
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            setCart([itemToAdd])
            return
        }
        //  setCart([...cart, {...item, quantity}])

        // logica de duplicados y consistente
        const itemDuplicateIndex = cart.findIndex((itemInTheCart) => itemInTheCart.id === item.id)
        if (itemDuplicateIndex >= 0) {
            const itemToUpdate = {
                ...item,
                quantity: cart[itemDuplicateIndex].quantity + quantity
            }
            
            const cartDraft = [...cart]
            cartDraft[itemDuplicateIndex] = itemToUpdate

            setCart(cartDraft)
        }else {
            const itemToAdd = {
                ...item,
                quantity: quantity
            }
            const cartDraft = [...cart, itemToAdd]
            setCart(cartDraft)
        }
    }

    const removeToCart = () => {}

    const valueToShare = {
        cart, 
        cantInCart: cart.length,
        //isInCart,
        addToCart,
        //clearCart,
        removeToCart
    }

    return (
        <CartContext.Provider value={valueToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider