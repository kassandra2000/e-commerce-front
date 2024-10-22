export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const DELETE_ONE_CART = "DELETE_ONE_CART";
export const RESET_CART = "RESET_CART";
export const GET_DETAILS = "GET_DETAILS";
export const SET_USER = "SET_USER";

//action
export const setProductAction = (data) => ({
  type: ADD_PRODUCTS,
  payload: data,
});
export const setCartAction = (data) => ({
  type: ADD_CART,
  payload: data,
});

export const deleteCartAction = (data) => ({
  type: DELETE_CART,
  payload: data,
});
export const deleteOneCartAction = (data) => ({
  type: DELETE_ONE_CART,
  payload: data,
});
export const resetCart = () => ({
  type: RESET_CART,
  payload: {},
});
export const getDetailsAction = (data) => ({
  type: GET_DETAILS,
  payload: data,
});

export const setUserAction = (data) => ({
  type: SET_USER,
  payload: data,
});
