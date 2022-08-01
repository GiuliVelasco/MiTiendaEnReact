const Item = ({producto}) => {
  const { img, nombre, descripcion, precio, stock}=producto

  return (
    <div className="card tarjeta" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={nombre}/>
    <div className="card-body">
        <h3 className="card-text">{nombre}</h3>
        <p className="card-text">${precio}</p>
        <p className="card-text">stock: {stock}</p>
    </div>
    <button className='btn btn-primary'>Mostrar más</button>
  </div>
  )
}

export default Item