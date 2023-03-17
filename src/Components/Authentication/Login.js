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
import MedicineBanner from "../Authentication/MedicineBanner.png";
import Header from "../Miscellaneous/Header";
import { Button } from "react-bootstrap";
import { useNavigate, createSearchParams } from "react-router-dom";

const Login = () => {
  let Allow = true;
  const navigate = useNavigate();
  const Admin = () => {
    navigate({
      pathname: "/",
      search: createSearchParams({
        Allow,
      }).toString(),
    });
  };
  return (
    <div>
      <Header From={"Login"}></Header>
      <MDBContainer className="my-5">
        <MDBCard className="shadow" style={{ marginTop: "5rem" }}>
          <MDBRow className="d-flex align-items-center ">
            <MDBCol md="4">
              <MDBCardImage
                src={MedicineBanner}
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
              />
            </MDBCol>

            <MDBCol md="8">
              <h5 className="card-title text-center mt-3">LOGIN IN FORM</h5>
              <MDBCardBody className="w-75 mx-auto mt-5">
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

                <div className="d-flex justify-content-between mx-7 mb-4 me-auto">
                  {/* <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                /> */}
                  <span>
                    Not a member ?
                    <a href="!#" className="anchor">
                      Signup now
                    </a>
                  </span>
                </div>

                <Button
                  onClick={Admin}
                  className="mb-4 w-100"
                  style={{
                    backgroundColor: "#f2f2df",
                    border: "none",
                    color: "rgb(109, 109, 109)",
                  }}
                >
                  Login in
                </Button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Login;
