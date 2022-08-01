import { useState, useEffect } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { dataItem } from "../../mock/GetOneProduct"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        dataItem
            .then((res) => setItem(res))
            .catch((err) => alert("Ha ocurrido un error", err));
    }, []);

    //const getItem = (id) => {
    //    dataItem
    //    .then((dataItem) => setItem(dataItem.filter((item) => item.id === (id)[0])))
    //    .catch(() => setItem('Hubo un problema con la carga, intente más tarde'))}

    //useEffect(() => {
    //    getItem(id)}, [id])

    return (
        <div>
            <h1>Item detail container</h1>
            {item.length !== 0? (
                <ItemDetail item={item}/>
            ) : (
                <h1>Cargando...</h1>
                )
            }
        </div>)
}

export default ItemDetailContainer;
