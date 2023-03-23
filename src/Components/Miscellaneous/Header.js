import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsArrowRightSquare } from "react-icons/bs";
import HeaderIcon from "../Miscellaneous/HeaderIcon.png";
import "../Miscellaneous/Header.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ReactFlagsSelect from "react-flags-select";

import LanguageOption from "../LanguageOption";
const Header = (props) => {
  let From = props?.From;
  let Allow = props?.Allow;

  const [selected, setSelected] = useState();

  const { t } = useTranslation();
  // const handleClick = (e) => {
  //   i18next.changeLanguage(e.target.value);
  // };
  let helper = selected;
  useEffect(() => {
    if (selected === "GB") {
      i18next.changeLanguage("en");
      helper = "GB";
      localStorage.setItem("helper", helper);
    } else if (selected === "YE") {
      i18next.changeLanguage("arb");
      helper = "YE";
      localStorage.setItem("helper", helper);
    } else {
      localStorage.getItem("helper");
      setSelected(localStorage.getItem("helper"));
    }
  }, [selected]);

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

  const ourService = () => {
    navigate({
      pathname: "/ourservices",
    });
  };

  const AddProduct = () => {
    navigate({
      pathname: "/addproduct",
    });
  };

  const staticCard = () => {
    navigate({
      pathname: "/staticCards",
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

  let img = {
    logo: require("../Miscellaneous/headerLogo2.png"),
  };

  return (
    <Navbar expand="lg" fixed="top" className="navbar" id="grad1">
      <Container>
        <Navbar.Brand>
          <div className="d-flex">
            <img
              className="preview me-2 mx-auto align-middle"
              src={img.logo}
              alt=""
              width="35px"
              height="35px"
            />
            <span className="align-middle" onClick={logout}>
              {t("MuneerAliCompany")}
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={Home}>{t("home")} </Nav.Link>
            {Allow === "true" ? null : (
              <Nav.Link onClick={staticCard}>{t("imports")}</Nav.Link>
            )}
            {Allow === "true" ? null : (
              <Nav.Link onClick={About}>{t("aboutus")}</Nav.Link>
            )}

            {Allow === "true" ? null : (
              <Nav.Link onClick={ourService}>{t("ourServices")}</Nav.Link>
            )}

            {Allow === "true" ? (
              <Nav.Link onClick={AddProduct}>{t("addProduct")}</Nav.Link>
            ) : null}

            {/* {Allow ? <Nav.Link >Update Product</Nav.Link> : null} */}

            <div className="d-flex align-items-center me-2">
              {/* <LanguageOption onChange={(e) => handleClick(e)}></LanguageOption> */}
              <ReactFlagsSelect
                selected={selected}
                onSelect={setSelected}
                placeholder="Select Language"
                countries={["GB", "YE"]}
                customLabels={{ GB: " ", YE: " " }}
              />
            </div>

            {Allow === "true" ? (
              <Nav.Link onClick={logout}>{t("LogOut")}</Nav.Link>
            ) : (
              <div>
                {From === "Login" ? null : (
                  <Nav.Link onClick={Login}> {t("login")}</Nav.Link>
                )}
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
