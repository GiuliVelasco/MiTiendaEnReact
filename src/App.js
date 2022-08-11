import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer saludo='Bodega en línea'/>} />
              <Route path="/item/:id" element={<ItemDetailContainer />}/>
              <Route
                path="/categoria/:categoria"
                element={<ItemListContainer saludo='Bodega en línea'/>}
              />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="*" element={<ItemListContainer />} />
              <Route path='/cart' element={<h1>Carrito</h1>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;