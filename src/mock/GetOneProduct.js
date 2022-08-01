const unProducto =    
    {
      id:1, 
      nombre:'vino 1', 
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", 
      precio:75, 
      img:'https://picsum.photos/200', 
      stock:5
    }

  export const dataItem = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(unProducto)
      }else{
        reject('Algo salió mal')
      }
    },2000)

  })