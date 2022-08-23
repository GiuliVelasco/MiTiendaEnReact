import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from './context/CartContext';

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
                path="/categoria/:id"
                element={<ItemListContainer saludo='Bodega en línea'/>}
              />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="*" element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;