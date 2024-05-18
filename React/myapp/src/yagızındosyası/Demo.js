import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, Routes, Route } from "react-router-dom";
import Products from "../Products/Products.js";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import Col from "react-bootstrap/Col";

export default function Demo() {
  const [title, setTitle] = useState("");
  

  return (
    <>
      <Navbar className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand>
            <Link id="home" to="/">
              <IoHome size={25} className="ms-3" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Link to="/login" id="login">
            <CgProfile size={25} className="me-4" />
          </Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/products" element={<Products title={title} />} />
      </Routes>
    </>
  );
}
