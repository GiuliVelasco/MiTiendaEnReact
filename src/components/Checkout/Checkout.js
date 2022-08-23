import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

const Checkout = () => {
    const[comprador, setComprador]=useState({})
    const[orderId, setOrderId]=useState('')
    const{cart, totalPrice , cleanCart}=useCart()
    const db = getFirestore()

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
                <h2>Checkout</h2>
                <form onSubmit={finalizarCompra}>
                    <input type='text' placeholder="Nombre completo" name="name" onChange={datosComprador}/>
                    <input type='number' placeholder="Numero de contacto" name="telefone" onChange={datosComprador}/>
                    <input type='email' placeholder="tuemail@mail.com" name="email" onChange={datosComprador}/>
                    <button type='submit'>Finalizar Compra</button>
                </form>
            </div>
            :<div>
                <h2>Muchas gracias por tu compra!</h2>
                <h3>El código de orden es {orderId}</h3>
                <button>Volver a la home</button>
            </div>
        }
        </>
    )
}

export default Checkout