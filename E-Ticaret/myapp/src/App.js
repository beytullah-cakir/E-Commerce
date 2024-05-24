import React from "react";
import Home from "./MainPage/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Login Page/Register.js";
import "./App.css";
import NavBar from "./MainPage/NavBar.js";
import "bootstrap/dist/css/bootstrap.css";
import PaymentPage from "./PaymentPage/PaymentPage.js";
import Login from "./Login Page/Login.js";
import Bottombar from "./BottomBar/Bottombar.js";

function App() {
  return (
    //Sayfalar arası geçiş için kullanılır
    <BrowserRouter>
    {/*her durumda navbarı ekranda tutar */}
      <NavBar />
      <Routes>
        {/*kullanıcı kayıt sayfasına gider */}
        <Route path="/register" element={<Register />} />
        {/*kullanıcı giriş sayfasına gider */}
        <Route path="/login" element={<Login />} />
        {/*anasayfaya gider */}
        <Route path="/" element={<Home />} />
        {/*ödeme sayfasına gider */}
        <Route path="/payment/:id" element={<PaymentPage />} />
      </Routes>
      {/*her durumda alt barı ekranda tutar */}
      <Bottombar />
    </BrowserRouter>
  );
}

export default App;
