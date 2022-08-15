import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider =({ children }) => {
    const [cart, setCart] = useState([])

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

    

    //mostrar cantidad de items agregados al carrito
        //PRIMER FORMA
    //let cantInCart = 0
    //cart.forEach((item) => {
    //    cantInCart += item.quantity
    //})
        //SEGUNDA FORMA
    const cantInCart = cart.reduce((previous, item) => previous + item.quantity, 0)

    const isInCart = (id) => cart.find((item) => item.id === id)? true : false

    const cleanCart = () => {
        setCart([])
    }

    const removeToCart = (id) => {
        let nono = cart.filter(item => item.id !== id)
        setCart(nono)
    }
    
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

    //const totalProduct = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    const valueToShare = {
        cart, 
        cantInCart,
        isInCart,
        addToCart,
        cleanCart,
        removeToCart,
        totalPrice,
        //totalProduct
    }

    return (
        <CartContext.Provider value={valueToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider