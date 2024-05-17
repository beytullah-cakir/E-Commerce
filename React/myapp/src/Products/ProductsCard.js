import React from "react";
import "./ProductsCard.css";
import products from "./ProductsDatas.js";

function ProductsCard({ name, price,image}) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={image} alt={name} className="card-image"/>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price}</p>
        
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductsCard;
