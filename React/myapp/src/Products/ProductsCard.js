import React from "react";
import "./ProductsCard.css";
import products from "./ProductsDatas.js";
import { Link } from "react-router-dom";

function ProductsCard({ name, price,image}) {
  return (
    <div className="card bg-light container m-1">
      <div className="card-body text-center">
        <img src={image} alt={name} className="card-image"/>
        <p className="card-title text">{name}</p>
        <p className="card-text">{price} TL</p>
        
        <button className="btn btn-primary"><Link to="/payment" className="text-light text-uppercase link">Satın Al</Link></button>
      </div>
    </div>
  );
}

export default ProductsCard;
