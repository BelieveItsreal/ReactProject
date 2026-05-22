import { useReducer, createContext } from "react"

export const CartContext = createContext()

const initialState = {
  cart: [],
};

function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    return { cart: [...state.cart, action.payload] };
  }
  if (action.type === "REMOVE_ITEM") {
    const index = state.cart.findIndex((item) => item.id === action.payload.id)
    const newCart = [...state.cart]
    newCart.splice(index, 1)
    return { cart: newCart }
  }
  return state;
}

function CartProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider