import React from "react";
import "./ProductsCard.css";
import products from "./ProductsDatas.js";
import { Link } from "react-router-dom";

function ProductsCard({ name, price,image}) {
  return (
    <div className="card bg-light">
      <div className="card-body text-center">
        <img src={image} alt={name} className="card-image"/>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price}</p>
        
        <button className="btn btn-primary"><Link to="/shop" className="text-light text-uppercase  link">Satın Al</Link></button>
      </div>
    </div>
  );
}

export default ProductsCard;
