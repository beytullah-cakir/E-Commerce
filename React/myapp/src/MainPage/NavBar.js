import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import Products from "../Products/Products.js";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [title, setTitle] = useState("");

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link id="home" to="/">
              <IoHome size={25} />
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
                    title="ladysport"
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
                    title="gentspoort"
                  >
                    Erkek Spor
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="childspooort"
                  >
                    Çocuk Spor
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>


              
              <NavDropdown title="Sandalet" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="ladysandals"
                  >
                    Kadın Sandalet
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="gentsanddals"
                  >
                    Erkek Sandalet
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="childsandddals"
                  >
                    Çocuk Sandalet
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>



              <NavDropdown title="Gündelik" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="boots"
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
                    title="boots"
                  >
                    Erkek Gündelik
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="boots"
                  >
                    Çocuk Gündelik
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>



              <NavDropdown title="Bot" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="boots"
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
                    title="boots"
                  >
                    Erkek Bot
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    class="links"
                    to="/products"
                    onClick={(e) => setTitle(e.target.getAttribute("title"))}
                    title="boots"
                  >
                    Çocuk Bot
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link
                  class="links"
                  to="/products"
                  onClick={(e) => setTitle(e.target.getAttribute("title"))}
                  title="boots"
                >
                  Kadın
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  class="links"
                  to="/products"
                  onClick={(e) => setTitle(e.target.getAttribute("title"))}
                  title="boots"
                >
                  Erkek
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>



          <Link to="/register" id="login">
            <CgProfile size={25} />
          </Link>



        </Container>
      </Navbar>

      <Routes>
        <Route path="/products" element={<Products title={title} />} />
      </Routes>
    </>
  );
}

export default NavBar;
