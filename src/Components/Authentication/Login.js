import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "../Authentication/Authentication.css";
import MedicineBanner from "../Authentication/MedicineBanner.png";
import Header from "../Miscellaneous/Header";
import { Button } from "react-bootstrap";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Footer from "../Miscellaneous/Footer";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";

const Login = () => {
  let Allow = true;
  const { t } = useTranslation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  let image = {
    ProfileImage: require("./Profile.png"),
  };

  const submitHandler = async () => {
    if (!email || !password) {
      alert("Please Enter All Fields");
      return;
    }
    try {
      let userData = {
        email: email,
        password: password,
      };

      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.LOGIN, userData)
        .then((res) => {
          console.log(res, "res login");

          if (res.data.success == true) {
            alert(`${res.data.message}`);
            setEmail("");
            setPassword("");
            localStorage.setItem("token", res.data.token);
            // localStorage.setItem("user_id", res.data.user._id);

            navigate({
              pathname: "/",
              search: createSearchParams({
                Allow,
              }).toString(),
            });

            return true;
          } else {
            alert(`There Some Error---`);
            return false;
          }
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Header From={"Login"}></Header>

      <div className="container text-center ">
        <img
          style={{ marginTop: "120px", height: "100px", width: "130px" }}
          className="img-fluid"
          src={image.ProfileImage}
          alt="img"
        />
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 py-4">
            <h1 className="mt-4 mb-4" style={{ color: "#212529" }}>
              {t("loginHeading")}
            </h1>
            <div className="mb-3 text-center">
              <input
                type="email"
                placeholder={t("enterYourEmail")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <input
                type="password"
                placeholder={t("enterYourPassword")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-button" onClick={submitHandler}>
              {t("login")}
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "5rem" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login;
