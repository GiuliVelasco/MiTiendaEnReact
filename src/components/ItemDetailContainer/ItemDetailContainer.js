import React, { useState, useEffect } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([]);
    const { id } = useParams();
    console.log("Mi id es el: ", id);
    
    useEffect(() => {
        const db = getFirestore()
        const productRef = doc(db, 'items', id) //trae de mi coleccion items, de mi db(database), los id.

        getDoc(productRef)
            .then((snapshot) => {
                setItem({...snapshot.data(), id: snapshot.id})
            })
            .catch(() =>{setItem('Hubo un problema con la carga, intente más tarde')})
            .finally(() => {setLoading(false)})
    }, [id])

    return (
        <div>
            <h1>Te contamos más...</h1>
            {item && <ItemDetail item={item}/> }
        </div>
    )
}

export default ItemDetailContainer;
