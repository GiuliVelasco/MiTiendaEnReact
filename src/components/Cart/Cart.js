import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
    const { cart, totalPrice, cleanCart } = useContext(CartContext)
    const navigate = useNavigate()
    
    if (cart.length === 0) {
        
        return (
            <>
            <p>No hay bebidas en tu bodeguita</p>
            <Link to='/'>Volver a la tienda para seguir comprando</Link>
            </>
        )
    }

    return (
        <>
            {cart.map(item => <ItemCart key={item.id} item={item}/>)}
            <h4>
                TOTAL: ${totalPrice()}
            </h4>
            <button className="d-flex p-2 bg-dark text-white" onClick={() => cleanCart()}>Vaciar bodega</button>
            <button className="d-flex p-2 bg-dark text-white" onClick={()=> navigate('/checkout')}>Terminar compra</button>
        </>
    )
}

export default Cart