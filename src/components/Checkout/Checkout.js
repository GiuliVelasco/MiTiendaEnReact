import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
    const[comprador, setComprador]=useState({})
    const[orderId, setOrderId]=useState('')
    const{cart, totalPrice , cleanCart}=useCart()
    const db = getFirestore()
    const navigate = useNavigate()

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if(Object.values(comprador).length !==3){
            console.log('Se deben completar todos los campos')
        }else{
            const ventasCollection = collection(db, "ventas")
            addDoc(ventasCollection,{
                comprador,
                items: cart,
                total: totalPrice(),
                date: serverTimestamp()
            })
            .then((res)=>{
                setOrderId(res.id)
                cleanCart()
            })
            .catch((error)=>console.log(error))
        }
    }

    return(
        <>
        {!orderId 
            ?<div>
                <h2>Ya casi terminamos!</h2>
                <p>Ingresa tus datos para completar la compra. Te enviaremos la factura y podrás seguir el estado de tu pedido.</p>
                <p>*Todos los campos son obligatorios</p>
                <form onSubmit={finalizarCompra}>
                    <input type='text' placeholder="Nombre completo" name="name" onChange={datosComprador}/>
                    <input type='number' placeholder="Numero de contacto" name="telefone" onChange={datosComprador}/>
                    <input type='email' placeholder="tuemail@mail.com" name="email" onChange={datosComprador}/>
                    <button type='submit'>Finalizar Compra</button>
                </form>
            </div>
            :<div>
                <h2>Muchas gracias por tu compra!</h2>
                <h3>El código de orden es: {orderId}</h3>
                <button onClick={()=> navigate('/')}>Volver a la bodeguita</button>
            </div>
        }
        </>
    )
}

export default Checkout