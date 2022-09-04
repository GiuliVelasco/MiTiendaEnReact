import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import Stack from 'react-bootstrap/Stack';
import "./ItemDetail.css"

const ItemDetail = ( {item} ) => {
    const[mensaje, setMensaje] = useState(false)
    const [contador, setContador] = useState(0)
    const { addToCart } = useContext(CartContext)

    const agregar = (quantityToAdd) => {
        setMensaje(`Agregaste ${quantityToAdd} items en el carrito`)
        setContador(quantityToAdd)
        addToCart(item, quantityToAdd)
    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            {mensaje && <p>{mensaje}</p>}
            <Stack direction="horizontal" className="card tarjeta" gap={2} style={{alignSelf:'center', width: '70%', margin: '.5rem'}}>

                <img src={item.img} alt={'${item.img}'} className="card-img-top" style={{width: '40%', height: '500px', margin: '.5rem'}}/>
                <div className="card-body">
                    <h2 className="card-text estiloh2">{item.nombre}</h2>
                    <p className="card-text">{item.descripcion}</p>
                    <div className="estiloDetalle">
                        <p className="card-text precio">${item.precio}</p>
                        <p className="card-text">Stock: {item.stock}</p>
                    </div>
                    <ItemCount inicial={1} stock={item.stock} funcionAgregar={agregar}/>
                </div>
            
            </Stack>
        </div>
    );
}

export default ItemDetail;

