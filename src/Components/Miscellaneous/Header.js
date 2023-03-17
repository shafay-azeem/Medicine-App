import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsArrowRightSquare } from "react-icons/bs";
import HeaderIcon from "../Miscellaneous/HeaderIcon.png";
import "../Miscellaneous/Header.css";
import { createSearchParams, useNavigate } from "react-router-dom";
const Header = (props) => {
  let From = props?.From;
  let Allow = props?.Allow;
  const navigate = useNavigate();
  const Login = () => {
    navigate({
      pathname: "/login",
    });
  };

  const logout = () => {
    navigate({
      pathname: "/",
    });
  };
  const SignUp = () => {
    navigate({
      pathname: "/signup",
    });
  };

  const About = () => {
    navigate({
      pathname: "/aboutus",
    });
  };

  const AddProduct = () => {
    navigate({
      pathname: "/addproduct",
    });
  };

  const Home = () => {
    navigate({
      pathname: "/",
      search: createSearchParams({
        Allow,
      }).toString(),
    });
  };
  return (
    <Navbar expand="lg" fixed="top" className="navbar" id="grad1">
      <Container>
        <Navbar.Brand>
          <img
            className="preview me-2 mx-auto align-middle"
            src={HeaderIcon}
            alt=""
            width="25px"
            height="25px"
          />
          <span className="align-middle">Medicine App</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={Home}>Home </Nav.Link>
            {Allow === "true" ? null : (
              <Nav.Link onClick={About}>About</Nav.Link>
            )}
            {Allow === "true" ? (
              <Nav.Link onClick={AddProduct}>Add Product</Nav.Link>
            ) : null}
            {/* {Allow ? <Nav.Link >Update Product</Nav.Link> : null} */}

            <NavDropdown
              title={<BsArrowRightSquare style={{ fontSize: "18px" }} />}
              id="basic-nav-dropdown"
            >
              {Allow === "true" ? (
                <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
              ) : (
                <div>
                  {From === "Login" ? null : (
                    <NavDropdown.Item onClick={Login}>Login</NavDropdown.Item>
                  )}

                  {From === "SignUp" ? null : (
                    <NavDropdown.Item onClick={SignUp}>
                      Sign Up
                    </NavDropdown.Item>
                  )}
                </div>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
