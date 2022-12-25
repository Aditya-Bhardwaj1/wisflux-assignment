import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navb/Navb';
import Pizzalist from './components/PizzaList/Pizzalist';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="App">
      <Navb/>
      {/* <Pizzalist/> */}
      <Product/>
    </div>
  );
}

export default App;
