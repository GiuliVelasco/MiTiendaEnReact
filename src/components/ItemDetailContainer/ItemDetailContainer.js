import React, { useState, useEffect } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
//import { dataItem } from "../../mock/FakeApi"
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

    //const getItem = (id) => {
    //    dataItem
    //    .then((res) => setItem(res.find((item) => item.id === parseInt(id))))
    //    .catch(() => setItem('Hubo un problema con la carga, intente más tarde')
    //    )
    //}
    //useEffect(() => {
    //    getItem(id)
    //}, [id])

    return (
        <div>
            <h1>Detalle de item seleccionado</h1>
            {item && <ItemDetail item={item}/>}
        </div>)
}

export default ItemDetailContainer;
