import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_DATA,
    GET_PRODUCTS_FAILURE,
    SORT_PRODUCTS_DATA
} from './actionTypes.js'

// action for get products request
const getProductsReq = () => ({
    type: GET_PRODUCTS_REQUEST,
});

// action for get products success

const getProductsSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: payload,
});

// action for get products failure

const getProductsFailure = (payload) => ({
    type: GET_PRODUCTS_FAILURE,
    payload: payload
});

// thunk call to fetch products  list
const getproductsData = () => ({
    type: GET_PRODUCTS_DATA
});

// action object for sort  feature

const sortProducts = () => ({
    type: SORT_PRODUCTS_DATA
});
