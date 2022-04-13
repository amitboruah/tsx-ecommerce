const actions = {
  FETCH_DATA: "FETCH_DATA",
  GET_DATA_SUCCESS:"GET_DATA_SUCCESS",
  GET_DATA_FAIL:"GET_DATA_FAIL", 

  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",

  fetchData: (payload:any) => ({
    type: actions.FETCH_DATA,
    payload: payload,
  }),

  addToCart: (payload: number) => ({
    type: actions.ADD_TO_CART,
    payload: payload,
  }),

  removeFromCart: (payload: number) => ({
    type: actions.REMOVE_FROM_CART,
    payload: payload,
  }),
};

export default actions