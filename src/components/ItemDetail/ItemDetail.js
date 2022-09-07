import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import Stack from 'react-bootstrap/Stack';
import "./ItemDetail.css";
import swal from 'sweetalert';

const ItemDetail = ( {item} ) => {
    const [contador, setContador] = useState(0)
    const { addToCart } = useContext(CartContext)

    const agregar = (quantityToAdd) => {
        swal({
            title: "Excelente!",
            text: `Agregaste ${quantityToAdd} bebidas al carrito`,
            icon: "success",
            timer: 3000,
        });
        setContador(quantityToAdd)
        addToCart(item, quantityToAdd)
    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            
            <Stack direction="horizontal" className="card tarjeta" gap={2} style={{alignSelf:'center', width: '60%', margin: '.5rem'}}>

                <img src={item.img} alt={'${item.img}'} className="card-img-top" style={{width: '15%', height: '400px', margin: '1rem'}}/>
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

