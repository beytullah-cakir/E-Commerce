import React, { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { products } from "./ProductsDatas.js";
import "./Products.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Products({ title }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(products);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    const filtered = products.filter((data) =>
      data.type.toLowerCase().includes(title.toLowerCase())
    );
    
    setFilteredData(filtered);
  }, [title]);

  return (
    <div>
      <Col xs="auto">
        <Form.Control
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
          id="search"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Col>
      {filteredData.map((product) => (
        <ProductsCard
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
export default Products;
