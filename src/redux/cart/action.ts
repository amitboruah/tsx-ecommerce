export const actions = {
    ADD_TO_CART: "ADD_TO_CART",
    ADD_TO_CART_SUCCESS: "ADD_TO_CART_SUCCESS",

    SHOW_CART: "SHOW_CART",
    SHOW_CART_SUCCESS: "SHOW_CART_SUCCESS",

    addToCart: (payload: number) => ({
        type: actions.ADD_TO_CART,
        payload: payload,
      }),
    
      removeFromCart: (payload: number) => ({
        type: actions.SHOW_CART,
        payload: payload,
      }),
}

export default actions