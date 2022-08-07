import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;