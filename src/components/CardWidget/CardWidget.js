import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaWineBottle } from 'react-icons/fa';

const CardWidget = () => {
    const valueToShare = useContext(CartContext)
    console.log({valueToShare})
    
    return (
        <>
        <FaWineBottle />
        <p className='contadorCardWidget'>{valueToShare.cantInCart}</p>
        </>
    );
}

export default CardWidget;