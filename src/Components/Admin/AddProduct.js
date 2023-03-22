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
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../Authentication/Authentication.css";
import { useSearchParams } from "react-router-dom";
import Header from "../Miscellaneous/Header";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Footer from "../Miscellaneous/Footer";
import Card from "react-bootstrap/Card";

const AddProduct = (props) => {
  const [video, setVideo] = useState();
  const [searchparams] = useSearchParams();
  const [image, setImage] = useState();
  const { t } = useTranslation();
  let Edit = searchparams.get("Edit");

  let img = {
    uploadImg: require("../Main/image.png"),
  };

  const pictureCapture = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "ync7qlnn");
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dgzcm3c1l/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data.url.toString());
      setImage(data.url.toString());
    } catch (err) {
      // console.log(err);
    }
  };

  const videoCapture = async (event) => {
    console.log("run");
    try {
      setVideo("");
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      formData.append("upload_preset", "ync7qlnn");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dgzcm3c1l/video/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const data = await res.json();
      setVideo(data.url.toString());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header From={"Home"} Allow="true"></Header>

      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row ">
          <div
            // style={{ marginTop: "35px" }}
            className="col-md-6 col-sm-12 My-Box"
          >
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

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Category" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" placeholder="Type" />
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center ">
            <section className="imgCard">
              {image ? (
                <div className="file-container">
                  <img
                    style={{
                      height: "162px",
                      width: "300px",
                    }}
                    src={image}
                    alt="example"
                    className="img-fluid"
                  />
                </div>
              ) : (
                <div className="file-container">
                  <img src={img.uploadImg} alt="example" />
                </div>
              )}
            </section>

            <div
              style={{
                width: "20%",
                marginTop: "12px",
              }}
              class=" my-Upload file btn btn-primary btn-Upload"
            >
              Upload
              <input
                className=""
                style={{
                  alignSelf: "center",
                }}
                type="file"
                name="file"
                onChange={pictureCapture}
                accept=".jpg,.png"
              />
            </div>

            {/* 2 */}

            <section className="imgCard my-2">
              {video ? (
                <div className="file-container">
                  <video width="300" height="162" controls>
                    <source src={video} type="video/mp4"></source>
                  </video>
                </div>
              ) : (
                <div className="file-container">
                  <img src={img.uploadImg} alt="example" />
                </div>
              )}
            </section>

            <div
              style={{
                width: "20%",
                // marginTop: "8px",
              }}
              class=" my-Upload file btn btn-primary btn-Upload"
            >
              Upload
              <input
                className=""
                style={{
                  alignSelf: "center",
                }}
                type="file"
                name="file"
                onChange={videoCapture}
                accept="video/*"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <MDBContainer className="my-5">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <MDBCard className="shadow mt-5">
              <MDBRow className="g-0 d-flex align-items-center">
      

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
      </MDBContainer> */}
      <div style={{ marginTop: "5rem" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AddProduct;
