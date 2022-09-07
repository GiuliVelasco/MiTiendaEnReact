import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './itemCart.css'

const ItemCart = ({ item }) => {
    const { removeToCart } = useContext(CartContext)

    return (
        <>
            <tr>
                <td>{item.nombre}</td>
                <td>{item.quantity}</td>
                <td>$ {item.precio}</td>
                <td>$ {item.quantity * item.precio}</td>
                <td><button className="btn btn-danger" onClick={() => removeToCart(item.id)}> X </button></td>
            </tr>
        </>
    )
}

export default ItemCart