import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
export const SingleProductList = () => {
  const {id} = useParams()

  const [data, setData] = useState([])  
  useEffect(() => {
    axios.get(`https://movie-fake-server.herokuapp.com/products/${id}`)
    .then(({ data }) => setData(data));
  },[])
    // make a request to get the details
  return (
    <div className="products-list">
      {data.map(() => {
        return (<div onClick={data.handleNav}>
          <img src={data.image} />
          <h3>{data.title}</h3>
          <p>Price : {data.price} --- Category : {data.category} </p>
          <h4>By - {data.brand}</h4>
        </div>)
      })}
    </div>
  );
};
