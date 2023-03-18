import React from "react";
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
import { Button, Form } from "react-bootstrap";
import MedicineBanner2 from "../Authentication/MedicineBanner2.jpg";
import Header from "../Miscellaneous/Header";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from "i18next"

const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const Login = () => {
    navigate({
      pathname: "/login",
    });
  };
  return (
    <div>
      <Header From={"SignUp"}></Header>
      <MDBContainer className="my-5">
        <MDBCard className="shadow" style={{ marginTop: "5rem" }}>
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="4">
              <MDBCardImage
                src={MedicineBanner2}
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0 img-fluid"
                fluid
              />
            </MDBCol>

            <MDBCol md="8">
              <h5 className="card-title text-center mt-3">{t("signUpHeading")}</h5>
              <MDBCardBody className="w-75 mx-auto">
                <Form className="PostProduct">
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      rows={3}
                      placeholder={t("enterYourName")}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      rows={3}
                      placeholder={t("enterYourEmail")}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      rows={3}
                      password
                      placeholder={t("enterYourPassword")}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      rows={3}
                      password
                      placeholder={t("enterYourConfirmPassword")}
                    />
                  </Form.Group>

                </Form>

                <Button
                  onClick={Login}
                  className="mb-4 w-100 "
                  style={{
                    backgroundColor: "#f2f2df",
                    border: "none",
                    color: "rgb(109, 109, 109)",
                  }}
                >
                  {t("signUp")}
                </Button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default SignUp;
