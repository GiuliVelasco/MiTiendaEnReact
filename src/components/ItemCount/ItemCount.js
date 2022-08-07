import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const navigate = useNavigate()
    const [contador, setContador] = useState(inicial)
    const sumar = () => {
        if(contador < stock){
            setContador (contador + 1)
        }
    }
    const restar = () => {
        if(contador > 0){
            setContador (contador - 1)
        }
    }

    function irAlCarrito(){ 
        navigate('/cart')
    }

    return (
        <>
        <Stack direction="vertical" gap={2} style={{alignSelf:'center'}}>
            <div >
                <Button variant="outline-secondary" onClick={restar}> - </Button>
                <span className="numContador"> {contador} </span>
                <Button variant="outline-secondary" onClick={sumar}> + </Button>
            </div>
            <div>
                <Button variant="secondary" onClick={()=>funcionAgregar(contador)}>Agregar al carrito</Button>
                <Button variant="secondary" onClick={irAlCarrito}>Terminar compra</Button>
            </div>
        </Stack>
        </>
    )
}

export default ItemCount