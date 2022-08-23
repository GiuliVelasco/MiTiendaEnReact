import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
//import { data } from "../../mock/FakeApi"
import { useParams } from "react-router-dom"
import { collection, getFirestore, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = ({saludo}) => {
    const [listaProductos, setListaProductos] = useState([])
    const[mensaje, setMensaje] = useState(false)
    const [loading, setLoading] = useState(true)

    //const { categoria } = useParams();
    const { id } = useParams();

    useEffect(()=> {
        const db = getFirestore()
        const productsCollection = collection(db, 'items')

        if (id) {
            getDocs(query(productsCollection, where('categoria', '==', id)))
                .then((snapshot) => {
                    setListaProductos(
                        snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    )
                })
                .catch(() => {setMensaje('Hubo un problema con la carga, intente más tarde')})
                .finally(() => {setLoading(false)})
        }else {
            getDocs(productsCollection)
                .then((snapshot) => {
                    setListaProductos (
                        snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    )
                })
                .catch(() => setMensaje('Hubo un problema con la carga, intente más tarde'))
                .finally(() => setLoading(false))
        }
        
        //data
        //.then((res) => {
         //   if (categoria) {
        //    setListaProductos(
        //        res.filter((listaProductos) => listaProductos.categoria === categoria)
        //    );
        //    } else {
        //        setListaProductos(res);
        //    }}
        //)
        //.catch(() => setMensaje('Hubo un problema con la carga, intente más tarde'))
        //.finally(()=> setLoading(false))
    }, [id])

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