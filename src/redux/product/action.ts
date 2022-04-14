const actions = {
  FETCH_DATA: "FETCH_DATA",
  GET_DATA_SUCCESS:"GET_DATA_SUCCESS",
  GET_DATA_FAIL:"GET_DATA_FAIL", 

  FETCH_SINGLE_PRODUCT:"FETCH_SINGLE_PRODUCT",
  FETCH_SINGLE_PRODUCT_SUCCESS:"FETCH_SINGLE_PRODUCT_SUCCESS",


  fetchData: (payload:any) => ({
    type: actions.FETCH_DATA,
    payload: payload,
  }),


  fetchSingleProduct:(payload:any)=>({
    type:actions.FETCH_SINGLE_PRODUCT,
    payload:payload
  })
};

export default actions