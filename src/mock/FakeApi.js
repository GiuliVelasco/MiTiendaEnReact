const productos = [
    {id:'01', nombre:'vino 1', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:75, img:'https://picsum.photos/200', stock:5},
    {id:'02', nombre:'vino 2', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:70, img:'https://picsum.photos/201',stock:15},
    {id:'03', nombre:'vino 3', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:100, img:'https://picsum.photos/202',stock:7},
    {id:'04', nombre:'vino 4', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:75, img:'https://picsum.photos/203',stock:3},
    {id:'05', nombre:'vino 5', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:90, img:'https://picsum.photos/204',stock:10},
    {id:'06', nombre:'vino 6', descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.", precio:50, img:'https://picsum.photos/205',stock:4}
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