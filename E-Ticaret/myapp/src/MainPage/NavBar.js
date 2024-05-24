import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Products from "../Products/Products.js";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  //Navbardaki tıkladığımız linklerin başlıklarını alır
  const [title, setTitle] = useState("");

  //aşağıda react-boostrap ile yapılmış bir navbar var
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand>
            <Link id="home" to="/" className="links">
              Anasayfa
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Spor" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="kadin-spor"
                  >
                    Kadın Spor
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="erkek-sppor"
                  >
                    Erkek Spor
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Gündelik" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="kadin-gündelik"
                  >
                    Kadın Gündelik
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="erkek-gündeliik"
                  >
                    Erkek Gündelik
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Bot" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="kadin-bot"
                  >
                    Kadın Bot
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="erkek-boot"
                  >
                    Erkek Bot
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link
                  class="link"
                  to="/products"
                  onClick={(e) => setTitle(e.target.getAttribute("title"))}
                  title="erkek-klasik"
                >
                  Klasik
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  class="link"
                  to="/products"
                  onClick={(e) => setTitle(e.target.getAttribute("title"))}
                  title="krampon"
                >
                  Krampon
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  class="link"
                  to="/products"
                  onClick={(e) => setTitle(e.target.getAttribute("title"))}
                  title="kadin"
                >
                  Kadın
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  class="link"
                  to="/products"
                  onClick={(e) => setTitle(e.target.getAttribute("title"))}
                  title="erkek"
                >
                  Erkek
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Link to="/register" id="login" className="link">
            Kayıt Ol
          </Link>
        </Container>
      </Navbar>


      {/*
      Tıkladığımız linkin başlığını Products fonksiyonuna atar ve Route ile istenilen sayfaya gider
      */}
      
      <Routes>
        <Route path="/products" element={<Products title={title} />} />
      </Routes>
    </>
  );
}

export default NavBar;
