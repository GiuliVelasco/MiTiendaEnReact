import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice, cleanCart } = useContext(CartContext)
    
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
            <p>
                TOTAL: ${totalPrice()}
            </p>
            <button onClick={() => cleanCart()}>Vaciar bodega</button>
        </>
    )
}

export default Cart