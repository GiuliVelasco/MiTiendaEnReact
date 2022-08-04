import { useState, useEffect } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
//import { dataItem } from "../../mock/GetOneProduct"
import { dataItem } from "../../mock/FakeApi"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    console.log("soy el item: ", item);
    const { id } = useParams();
    console.log("Mi id es el: ", id);
    
    //useEffect(() => {
    //    dataItem
    //        .then((res) => setItem(res))
    //        .catch((err) => alert("Ha ocurrido un error", err));
    //}, []);


    const getItem = (id) => {
        dataItem
        .then((res) => setItem(res.find((item) => item.id === parseInt(id))))
        .catch(() => setItem('Hubo un problema con la carga, intente más tarde')
        )

    }

    useEffect(() => {
        getItem(id)
    }, [id])

    return (
        <div>
            <h1>Item detail container</h1>
            {item && <ItemDetail item={item}/>}
        </div>)
}

export default ItemDetailContainer;
