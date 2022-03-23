import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    // GET_PRODUCTS_DATA,
    GET_PRODUCTS_FAILURE,
    ASC_SORT_PRODUCTS_DATA,
    DESC_SORT_PRODUCTS_DATA
} from './actionTypes.js'

import axios from 'axios';
// action for get products request
export const getProductsReq = () => ({
    type: GET_PRODUCTS_REQUEST,
});

// action for get products success

export const getProductsSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: payload,
});

// action for get products failure

export const getProductsFailure = (payload) => ({
    type: GET_PRODUCTS_FAILURE,
    payload: payload
});

// thunk call to fetch products  list
export const getproductsData = () => (dispatch) => {
    dispatch(getProductsReq());
  axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then(({ data }) => dispatch(getProductsSuccess(data)));
};

// action object for sort  feature

export const asc_sortProducts = () => ({
    type: ASC_SORT_PRODUCTS_DATA
});

export const desc_sortProducts = () => ({
    type: DESC_SORT_PRODUCTS_DATA
});