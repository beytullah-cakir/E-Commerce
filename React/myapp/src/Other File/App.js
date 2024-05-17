/* eslint-disable no-unreachable */
import React, { useState,useEffect } from "react";
import Home from "../MainPage/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "../Login Page/LoginPage.js";
import "./App.css";
import NavBar from "../MainPage/NavBar.js";
import Products from "../Products/Products.js";
import ProductsCard from "../Products/ProductsCard.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from "../yagızındosyası/Demo.js";

function App() {
  
  return (
      <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/login" element={<Loginpage />} />
          <Route path="/" element={<Home />}/>
        </Routes>
        <Demo/>
      </BrowserRouter>
  );
}

export default App;
