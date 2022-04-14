import actions from "./action";

const initialValue = {
  Cart: [],
  total: "",
  quantity: "",
};

const productReducers = (state = initialValue, action: any) => {
  switch (action.type) {
    // case actions.ADD_TO_CART:
    //   return {
    //     ...state,
    //     productData: action.payload.data,
    //     totalItem: action.payload.total,
    //   };

    // case actions.ADD_TO_CART_SUCCESS:
    //   return {
    //     ...state,
    //     Cart: action.payload.data,
    //   };

    case actions.SHOW_CART:
      return {
        ...initialValue,
      };
      
    case actions.SHOW_CART_SUCCESS:
      return {
        ...state,
            Cart: action.payload,
      };

    default:
      return state;
  }
};

export default productReducers;
