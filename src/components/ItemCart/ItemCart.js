import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './itemCart.css'

const ItemCart = ({ item }) => {
    const { removeToCart } = useContext(CartContext)

    return (
        <div className='itemCart'>
            <p>Título: {item.nombre}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.precio}</p>
            <p>Subtotal: ${item.quantity * item.precio}</p>
            <button className="btn btn-danger" onClick={() => removeToCart(item.id)}> X </button>
        </div>
    )
}

export default ItemCart