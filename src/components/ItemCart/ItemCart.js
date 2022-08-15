import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCart = ({ item }) => {
    const { removeToCart } = useContext(CartContext)

    return (
        <div>
            <p>Título: {item.nombre}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.precio}</p>
            <p>Subtotal: ${item.quantity * item.precio}</p>
            <button onClick={() => removeToCart(item.id)}> Eliminar </button>
        </div>
    )
}

export default ItemCart