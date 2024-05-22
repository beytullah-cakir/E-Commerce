import React, { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { products } from "./ProductsDatas.js";
import "./Products.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Products({ title }) {
  const [filteredData, setFilteredData] = useState(products);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setFilteredData(
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
