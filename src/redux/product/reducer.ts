import actions from "./action";

const initialValue = {
  productData: [],
  totalItem:""

};

const productReducers = (state = initialValue, action: any) => {
  switch (action.type) {
    case actions.GET_DATA_SUCCESS:
      // console.log(action.payload  , "get success");
      return { ...state, productData: action.payload.data ,
        totalItem:action.payload.total};

    // case actions.GET_DATA_FAIL:
    //   console.log(action.response, "get Fail");
    //   return {getProductError: action.response };

    case actions.ADD_TO_CART:
      const add = state.productData.findIndex(
        (e: any) => e.id === action.payload
      );
      // console.log(state.productData[1].qty ,"from reducer");
      state.productData[add].qty += 1;
      return {
        ...state,
      };

    case actions.REMOVE_FROM_CART:
      const remove = state.productData.findIndex(
        (e: any) => e.id === action.payload
      );
      state.productData[remove].qty -= 1;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default productReducers;
