import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="page">
      <h1>Products</h1>
      <ProductList/>
      <Cart/>
    </div>
  );
}

export default App;
