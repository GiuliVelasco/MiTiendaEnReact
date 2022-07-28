import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'


const Item = ({producto}) => {
  const[mensaje, setMensaje] = useState(false)
  const { img, nombre, descripcion, precio, stock, hashtags}=producto

  const agregar = (cantidad) => {
    setMensaje(`Agregaste ${cantidad} items en el carrito`)
  }

  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={nombre}/>
    <div className="card-body">
        <p className="card-text">{nombre}</p>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">${precio}</p>
        <p className="card-text">stock: {stock}</p>
        {hashtags?.map((frase, index)=> <p className="card-text" key={index}>{frase}</p>)}
    </div>
      {mensaje && <p>{mensaje}</p>}
      <ItemCount inicial={1} stock={stock} funcionAgregar={agregar}/>
    <button className='btn btn-primary'>Mostrar más</button>
  </div>
  )
}

export default Item