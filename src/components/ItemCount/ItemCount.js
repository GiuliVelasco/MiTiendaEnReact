import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';

const ItemCount = ({inicial, stock, funcionAgregar}) => {
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

    return (
        <>
        <Stack direction="horizontal" gap={2}>
            <div >
            <Button variant="outline-secondary" onClick={restar}> - </Button>
            <span className="numContador"> {contador} </span>
            <Button variant="outline-secondary" onClick={sumar}> + </Button>
            </div>
            <Button variant="secondary" onClick={()=>funcionAgregar(contador)}>Comprar</Button>
        </Stack>
        </>
    )
}

export default ItemCount