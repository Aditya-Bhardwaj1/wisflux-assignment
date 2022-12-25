import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navb/Navb';
import Pizzalist from './components/PizzaList/Pizzalist';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Pastorders from './components/Pastorders/Pastorders';


function App() {
  return (
    <div className="App">
      <Navb/>
      {/* <Pizzalist/> */}
      {/* <Product/> */}
      {/* <Cart/> */}
      <Pastorders/>
    </div>
  );
}

export default App;
