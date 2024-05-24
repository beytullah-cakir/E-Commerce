import React, { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
//ürünleri import eder
import { products } from "./ProductsDatas.js";
//react boostrap
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Products({ title }) {
  //Ürünleri atadığımız yer
  const [filteredData, setFilteredData] = useState(products);
  //ürünşer sayfasındaki inputtaki anlık değeri alır
  const [inputValue, setInputValue] = useState("");

  //useEffect metodu değerler her değişdiğinde çağırılır
  useEffect(() => {
    setFilteredData(
      //Navbarda tıklanılan linkin başlıkları ile inputa girilen değerlere göre verilerimizi filtreler
      products.filter(
        (product) =>
          product.type
            .toLocaleLowerCase()
            .includes(title.toLocaleLowerCase()) &&
          product.name
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase()))
    );
  }, [title, inputValue]);

  return (
    <>
    {/*Ürünler sayfasındaki inputun kodu*/}
      <Col xs="auto">
        <Form.Control
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
          id="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Col>
{/*Filtrelenen ürülerin içinde map detodu ile dolaşarak ProductCard dosyasındaki değerlere atıyoruz*/}
      {filteredData.map((product) => (
        <div className="d-inline-flex">
          <ProductsCard
            image={product.image}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        </div>
      ))}
    </>
  );
}
export default Products;
