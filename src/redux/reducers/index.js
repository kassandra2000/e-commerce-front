import {
  ADD_CART,
  ADD_PRODUCTS,
  DELETE_CART,
  DELETE_ONE_CART,
  GET_DETAILS,
  RESET_CART,
  SET_USER,
} from "../actions";

const initialState = {
  product: [],
  cart: [],
  details: [],
  user: "",
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };

    case ADD_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case DELETE_ONE_CART: {
      const productToUpdate = state.cart.find(
        (product) => product.id === action.payload
      );

      if (productToUpdate) {
        if (productToUpdate.quantity > 1) {
          return {
            ...state,
            cart: state.cart.map((product) =>
              product.id === action.payload
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          };
        } else {
          return {
            ...state,
            cart: state.cart.filter((product) => product.id !== action.payload),
          };
        }
      }

      return state;
    }

    case DELETE_CART:
      return {
        ...state,

        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    case RESET_CART: {
      return {
        ...state,
        cart: []
      };
    }
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default mainReducer;
