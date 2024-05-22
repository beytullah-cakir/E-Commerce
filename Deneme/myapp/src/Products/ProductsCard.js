import React from "react";
import "./ProductsCard.css";
import { Route, useNavigate } from "react-router-dom";


function ProductsCard({ name, price,image,id}) {
  const navigate = useNavigate();

  function SendToPaymentPage(){
    navigate(`/payment/${id}`);
  }


  return (
    <div className="card bg-light container m-1">
      <div className="card-body text-center">
        <img src={image} alt={name} className="card-image"/>
        <p className="card-title text">{name}</p>
        <p className="card-text">{price} TL</p>
        
        <button className="btn btn-primary" onClick={SendToPaymentPage}>Satın Al</button>
      </div>
    </div>
  );
}

export default ProductsCard;
