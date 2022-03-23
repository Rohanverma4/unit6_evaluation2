import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/products.css"
import {
  // getProductsReq,
  // getProductsSuccess,
  getproductsData,
  // getProductsFailure,
  desc_sortProducts,
  asc_sortProducts
} from '../Redux/actions.js'
import { useNavigate } from "react-router";
export const Products = () => {
  // to get all products list on component mounts
  const data = useSelector((store) => store)
  console.log(data)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
  }, []);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    if(e.target.value == 'asc'){
      dispatch(asc_sortProducts())
    } else if (e.target.value == 'desc') {
      dispatch(desc_sortProducts())
    }
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data?.products.length &&
          data?.products.map((item) => {
            return (<SingleProduct id = {item.id} 
                                  price= {item.price}
                                  image= {item.image}
                                  title= {item.title}
                                  brand = {item.brand}
                                  category = {item.category}
                                  navigate={navigate}/>)
          })}
      </div>
    </>
  );
};


function SingleProduct({id,price,image,title, brand, category,navigate }) {
  const handleNav = () => {
    navigate(`/products/${id}`)
  }
  return (
    <div onClick={handleNav}>
      <img src={image} />
      <h3>{title}</h3>
      <p>Price : {price} --- Category : {category} </p>
      <h4>By - {brand}</h4>
    </div>
  )
}