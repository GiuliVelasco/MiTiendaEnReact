import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaWineBottle } from 'react-icons/fa';

const CardWidget = () => {
    const { cantInCart } = useContext(CartContext)
    
    if ( cantInCart === 0){
        return <></>
    }

    return (
        <>
        <FaWineBottle />
        <p className='contadorCardWidget'>{cantInCart}</p>
        </>
    );
}

export default CardWidget;