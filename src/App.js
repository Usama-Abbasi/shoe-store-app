import './App.css';
import Route from './Route';
import {CartProvider} from '..//src/context/cartContext';
function App() {
  return (
    <CartProvider>
       <Route/>
    </CartProvider>
   
     );
}

export default App;
