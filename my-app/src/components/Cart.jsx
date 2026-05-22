import { useContext } from "react";
import { CartContext } from "./CartProvider";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart ({state.cart.length})</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        state.cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>
            <span>₹{item.price.toLocaleString()}</span>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
            >
              Remove
            </button>
          </div>
        ))
      )}
      {state.cart.length > 0 && (
        <h3>
          Total: ₹
          {state.cart
            .reduce((total, item) => total + item.price, 0)
            .toLocaleString()}
        </h3>
      )}
    </div>
  );
}


export default Cart