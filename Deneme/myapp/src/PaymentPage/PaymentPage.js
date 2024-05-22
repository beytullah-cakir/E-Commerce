import React, { useEffect } from "react";
import "./PaymentPage.css";
import { useParams } from "react-router-dom";

export default function PaymentPage() {
  
  const {id}=useParams();


  

  return (
    <>
    <div>{id}</div>
    
  
    
    </>
  );
}
