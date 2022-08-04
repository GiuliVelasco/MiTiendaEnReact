const productos = [
    {
      id:1, 
      nombre:'vino 1', 
      descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", 
      precio:75, 
      categoria: "vinos tintos",
      img:'https://picsum.photos/200', 
      stock:5},
    {id:2, nombre:'vino 2', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:70, categoria:"vinos tintos", img:'https://picsum.photos/201',stock:15},
    {id:3, nombre:'vino 3', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:100, categoria:"vinos blancos", img:'https://picsum.photos/202',stock:7},
    {id:4, nombre:'vino 4', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:75, categoria:"vinos blancos", img:'https://picsum.photos/203',stock:3},
    {id:5, nombre:'vino 5', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:90, categoria:"vinos organicos", img:'https://picsum.photos/204',stock:10},
    {id:6, nombre:'vino 6', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:50, categoria:"vinos organicos", img:'https://picsum.photos/205',stock:4}
]

export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('Algo salió mal')
      }
    },2000)

  })

  export const dataItem = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
      reject('Algo salió mal')
      }
    },2000)

  })