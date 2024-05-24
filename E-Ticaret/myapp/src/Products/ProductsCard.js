import React from "react";
import "./ProductsCard.css";
import { useNavigate } from "react-router-dom";

function ProductsCard({ name, price, image, id }) {
  //İstenilen sayfaya gitmek için kullanılan bir fonksiyondur
  const navigate = useNavigate();

  //Aşağıdaki butona tıkladığımız zaman ürüne ait id ile istenilen sayfaya giden fonksiyon
  function SendToPaymentPage() {
    navigate(`/payment/${id}`);
  }

  //her bir ürünün bilgilerini içeren bir ürün kartı tasarlar
  return (
    <div className="card bg-light container m-1">
      <div className="card-body text-center">
        <img src={image} alt={name} className="card-image" />
        <p className="card-title text">{name}</p>
        <p className="card-text">{price} TL</p>
        <button className="btn btn-primary" onClick={SendToPaymentPage}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default ProductsCard;
