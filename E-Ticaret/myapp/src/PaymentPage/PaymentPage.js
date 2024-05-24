import { useParams } from "react-router-dom";
//tüm ürünleri importlar
import { products } from "../Products/ProductsDatas";
import "./PaymentPage.css";
import { useEffect, useState } from "react";



export default function PaymentPage() {
  //urlmizdeki değişen parametreleri döndürür
  const { id } = useParams();
  //ürünleri atarız
  const [filteredeData,setFilteredData]=useState(products);

  //Aşağıdaki butona tıkladığımız zaman çalışır
  function Buy(){
    alert("Siparişiniz başarıyla alındı")
  }

  useEffect(()=>{
    //ürünlerin idsini urlmizde dinamik olarak değişen id ile karşılaştırarak ürünleri filtreler
    setFilteredData(
      products.filter(product=>product.id.toLocaleString()===id)
    )
  },[id]) 
  
  //filtrelelen ürülerin bilgilerini ekrana dödürür
  return filteredeData
    .map((data) => (
      <div className="payment-main">
        <div className="product-details">
          <div className="product-image">
            <img src={data.image} alt="..."></img>
          </div>
          <div className="product-info">
            <div className="product-name">
              {data.name}
            </div>
            <div className="button">
              <button className="btn" onClick={Buy}>Satın al</button>
            </div>
          </div>
        </div>
      </div>
    ));
}
