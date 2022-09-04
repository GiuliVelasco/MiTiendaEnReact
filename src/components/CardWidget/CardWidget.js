import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaWineBottle } from 'react-icons/fa';
import './CardWidget.css'
import {Link} from 'react-router-dom'

const CardWidget = () => {
    const { cantInCart } = useContext(CartContext)
    
    if ( cantInCart === 0){
        return <></>
    }
    
    return (
        <>
        <FaWineBottle className='icono'/>
        <p ><Link className='contadorCardWidget' to='/cart'>{cantInCart}</Link></p>
        </>
    );
}

export default CardWidget;