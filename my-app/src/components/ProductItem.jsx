import { useContext } from "react";
import { CartContext } from "./CartProvider";

function ProductItem({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <div className="card-info">
        <h3>{product.name}</h3>
        <p>₹{product.price.toLocaleString()}</p>
        <button
          onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem
