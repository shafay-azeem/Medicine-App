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

const SignUp = () => {
  const navigate = useNavigate();
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
              <h5 className="card-title text-center mt-3">SIGN UP FORM</h5>
              <MDBCardBody className="w-75 mx-auto">
                <Form className="PostProduct">
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      rows={3}
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      rows={3}
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      rows={3}
                      password
                      placeholder="Enter Your Password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      rows={3}
                      password
                      placeholder="Enter Your Confirm Password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      rows={3}
                      placeholder="Enter Your Company Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Company Description"
                    />
                  </Form.Group>
                </Form>
                {/* <MDBInput
                wrapperClass="mb-5"
                type="text"
                placeholder="Enter Your Name"
              />
              <MDBInput
                wrapperClass="mb-5"
                type="email"
                placeholder="Enter Your Email"
              />
              <MDBInput
                wrapperClass="mb-5"
                id="form2"
                type="password"
                placeholder="Enter Your Password"
              />
              <MDBInput
                wrapperClass="mb-5"
                id="form2"
                type="password"
                placeholder="Enter Your Confirm Password"
              /> */}

                {/* <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div> */}

                <Button
                  onClick={Login}
                  className="mb-4 w-100 "
                  style={{
                    backgroundColor: "#f2f2df",
                    border: "none",
                    color: "rgb(109, 109, 109)",
                  }}
                >
                  Sign Up
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
