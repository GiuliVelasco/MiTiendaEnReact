import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { data } from "../../mock/FakeApi"

const ItemListContainer = ({saludo}) => {
    const [listaProductos, setListaProductos] = useState([])
    const[mensaje, setMensaje] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        data
        .then((res) => setListaProductos(res))
        .catch(() => setMensaje('Hubo un problema con la carga, intente más tarde'))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <div>
            <h2>{saludo}</h2>
            {mensaje && <p className="text-start">{mensaje}</p>}
            {/*lista de productos - promesa*/}
            {loading ? <p>Cargando...</p>  : <ItemList listaProductos={listaProductos}/>}
        </div>
        )
}

export default ItemListContainer