import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
//import {useNavigate} from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ( {item} ) => {
    //const navigate = useNavigate()
    const[mensaje, setMensaje] = useState(false)
    const [contador, setContador] = useState(0)
    const { addToCart } = useContext(CartContext)

    const agregar = (quantityToAdd) => {
        setMensaje(`Agregaste ${quantityToAdd} items en el carrito`)
        setContador(quantityToAdd)
        addToCart(item, quantityToAdd)

        //navegar al cart
        //navigate('/cart')
    }
    console.log(contador,' productos en el carrito')
    

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            {mensaje && <p>{mensaje}</p>}
            <div className="card tarjeta" style={{width: '20rem', margin: '.5rem' }}>
                <img src={item.img} alt={'${item.img}'} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-text">{item.nombre}</h3>
                    <p className="card-text">{item.descripcion}</p>
                    <p className="card-text">${item.precio}</p>
                    <p className="card-text">stock: {item.stock}</p>
                </div>
                <ItemCount inicial={1} stock={item.stock} funcionAgregar={agregar}/>
            </div>
        </div>
    );
}

export default ItemDetail;

