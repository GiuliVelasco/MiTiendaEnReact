import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';
import {useNavigate} from 'react-router-dom';
import "./Cart.css";

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
            <section className="sectionTable">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Vino</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => <ItemCart key={item.id} item={item}/>)}
                        <tr className="valorFinal">
                            <td colspan="2"></td>
                            <td colspan="1">TOTAL FINAL:</td>
                            <td colspan="2">$ {totalPrice()}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="botonesCarrito">
                    <button className="btnCart d-flex p-2" onClick={()=> navigate('/')}>Seguir comprando</button>
                    <button className="btnCart d-flex p-2" onClick={()=> navigate('/checkout')}>Terminar compra</button>
                    <button className="btnCart d-flex p-2" onClick={() => cleanCart()}>Vaciar carrito</button>
                </div>
            </section>
            
        </>
    )
}

export default Cart