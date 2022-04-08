const initialValue: any = {
  productData: [],
};

const productReducers = (state = initialValue, action: any) => {
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      // console.log("get success");
      return { ...state, productData: action.data };

    case "ADD_TO_CART":
      const add = state.productData.findIndex(
        (e: any) => e.id === action.payload
      );
      // console.log(state.productData[1].qty ,"from reducer");
      state.productData[add].qty += 1;
      return {
        ...state,
      };

    case "REMOVE_TO_CART":
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
