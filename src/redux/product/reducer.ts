import actions from "./action";

const initialValue = {
  productData: [],
  totalItem:"",
  singleProd:[]

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

    case actions.FETCH_SINGLE_PRODUCT_SUCCESS:
      return{
          ...state , singleProd: action.payload
      }

    default:
      return state;
  }
};

export default productReducers;
