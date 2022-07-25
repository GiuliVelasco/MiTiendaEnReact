import {useState} from "react"
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({saludo}) => {
    const[mensaje, setMensaje] = useState(false)

    //funcion que va a agregar efectivamente mis productos al carrito
    function agregar(cantidad) {
        //console.log('Agregaste ' + cantidad + ' prod al carrito') Una forma
        //console.log(`Agregaste ${cantidad} items al carrito`) //otra forma
        setMensaje(`Agregaste ${cantidad} items al carrito`) //otra forma
    }

    return (
        <div>
            <h2>{saludo}</h2>
            {mensaje && <p className="text-start">{mensaje}</p>}
            <ItemCount inicial={1} stock={20} funcionAgregar={agregar}></ItemCount>
        </div>
    )
}

export default ItemListContainer