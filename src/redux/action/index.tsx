export const fetchData = () => {
    return {
        type : "FETCH_DATA"
    }
}

export const addToCart = (id:number) => {
    return {
        type : "ADD_TO_CART",
        payload : id
    }
}
export const removeToCart = (id:number) => {
    return {
        type : "REMOVE_TO_CART",
        payload : id
    }
}

