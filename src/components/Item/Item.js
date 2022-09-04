import React from 'react';
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  const { id, img, nombre, precio, stock } = producto

  return (
    
      <div className="card tarjeta estiloTarjeta">
        <img src={img} className="card-img-top estiloImg" alt={nombre}></img>
        <div className="card-body">
          <h3 className="card-text">{nombre}</h3>
          <p className="card-text">${precio}</p>
          <p className="card-text">Stock: {stock}</p>
        </div>
        <button className='estiloBtn'><Link className="estiloLink" to={`/item/${id}`}>Mostrar más</Link></button>
      </div>
    
  )
}

export default Item