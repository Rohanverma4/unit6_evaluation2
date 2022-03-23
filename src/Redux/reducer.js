import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_DATA,
    GET_PRODUCTS_FAILURE,
    ASC_SORT_PRODUCTS_DATA,
    DESC_SORT_PRODUCTS_DATA
} from './actionTypes.js';

const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (store = initState, action)=>{
    // add the switch statement for different actions
    switch(action.type) {
        case GET_PRODUCTS_REQUEST:
            return{
                ...store,
                isError: false,
                isLoading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...store,
                isLoading: false,
                products: action.payload
            }
        case GET_PRODUCTS_FAILURE:
            return {
                ...store,
                isError: true,
            }
        case ASC_SORT_PRODUCTS_DATA:
            return{
                ...store,
                products: [...sortAsc(store.products)]
            }
        case DESC_SORT_PRODUCTS_DATA:
            return{
                ...store,
                products: [...sortDesc(store.products)]
            }
    }
}

const sortAsc = (arr) => {
    var sortedArr = arr.sort((x,y) => {
        return x.price - y.price
    })
    return sortedArr
}

const sortDesc = (arr) => {
    var sortedArr = arr.sort((y,x) => {
        return x.price - y.price
    })
    return sortedArr
}