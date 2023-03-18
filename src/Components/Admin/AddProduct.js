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
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../Authentication/Authentication.css";
import { useSearchParams } from "react-router-dom";
import Header from "../Miscellaneous/Header";
import { useTranslation } from 'react-i18next';
import i18next from "i18next"

const AddProduct = (props) => {
  const [searchparams] = useSearchParams();
  const { t } = useTranslation();
  let Edit = searchparams.get("Edit");
  return (
    <>
      <Header From={"Home"} Allow="true"></Header>
      <MDBContainer className="my-5 ">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <MDBCard className="shadow mt-5">
              <MDBRow className="g-0 d-flex align-items-center">
                {/* <MDBCol md="4">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              alt="phone"
              className="rounded-t-5 rounded-tr-lg-0"
              fluid
            />
          </MDBCol> */}

                <MDBCol md="12">
                  {Edit === "true" ? (
                    <h5 className="card-title text-center mt-3">
                      {t("updateProductHeading")}
                    </h5>
                  ) : (
                    <h5 className="card-title text-center mt-3">
                      {t("createProductHeading")}
                    </h5>
                  )}

                  <MDBCardBody>
                    <Form className="PostProduct">
                      <Form.Group className="mb-4">
                        <Form.Label>{t("productName")}</Form.Label>
                        <Form.Control
                          type="text"
                          rows={3}
                          placeholder={t("productName")}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Form.Label>{t("description")}</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder={t("description")}
                        />
                      </Form.Group>
                      <Form.Group controlId="formFile" className="mb-4">
                        <Form.Label>{t("uploadPicture")}</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                    </Form>
                    {Edit === "true" ? (
                      <Button
                        className="mb-4 w-100"
                        style={{
                          backgroundColor: "#f2f2df",
                          border: "none",
                          color: "rgb(109, 109, 109)",
                        }}
                      >
                        {t("updateBtn")}
                      </Button>
                    ) : (
                      <Button
                        className="mb-4 w-100"
                        style={{
                          backgroundColor: "#f2f2df",
                          border: "none",
                          color: "rgb(109, 109, 109)",
                        }}
                      >
                        {t("saveBtn")}
                      </Button>
                    )}
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </Col>
          <Col md={3}></Col>
        </Row>
      </MDBContainer>
    </>
  );
};

export default AddProduct;
