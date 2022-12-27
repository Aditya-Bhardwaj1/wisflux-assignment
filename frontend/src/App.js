import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navb/Navb';
import Pizzalist from './components/PizzaList/Pizzalist';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Pastorders from './components/Pastorders/Pastorders';


function App() {
  return (
    <>
    <Router>
      <Navb/>
      <Routes>
      <Route exact path='/' element={<Pizzalist/>}/>
      <Route exact path='/product' element={<Product/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/pastorder' element={<Pastorders/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
