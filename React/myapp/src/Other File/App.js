/* eslint-disable no-unreachable */
import React, { useState, useEffect } from "react";
import Home from "../MainPage/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Login Page/Register.js";
import "./App.css";
import NavBar from "../MainPage/NavBar.js";
import Products from "../Products/Products.js";
import ProductsCard from "../Products/ProductsCard.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Demo from "../yagızındosyası/Demo.js";
import PaymentPage from "../PaymentPage/PaymentPage.js";
import Login from "../Login Page/Login.js";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
