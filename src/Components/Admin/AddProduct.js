import React, { useEffect, useState } from "react";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../Miscellaneous/Header";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Footer from "../Miscellaneous/Footer";
import Card from "react-bootstrap/Card";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";

const AddProduct = (props) => {
  const [video, setVideo] = useState();
  const [searchparams] = useSearchParams();
  const [image, setImage] = useState();

  const [productName, setProductName] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productType, setProductType] = useState();
  const [product, setProduct] = useState();

  const { t } = useTranslation();
  const navigate = useNavigate();
  let Edit = searchparams.get("Edit");
  let token = localStorage.getItem("token");
  let productId = searchparams.get("productId");

  useEffect(() => {
    if (Edit === "true") {
      getSingleProduct();
    } else {
      setProductName("");
      setProductDescription("");
      setProductCategory("");
      setProductType("");
      setImage("");
      setVideo("");
    }
  }, [Edit]);

  async function getSingleProduct() {
    let getSingleProduct = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_SINGLE_PRODUCT + productId
    );
    let res = getSingleProduct.data.product;
    setProduct(res);
    setProductName(res?.productName);
    setProductDescription(res?.productDescription);
    setProductCategory(res?.productCategory);
    setProductType(res?.productType);
    setVideo(res?.productVideo);
    setImage(res?.productImg);
    return;
  }

  const createProduct = async () => {
    if (
      !productName ||
      !productDescription ||
      !productCategory ||
      !productType
    ) {
      alert("Please Enter All Fields");
      return;
    }

    try {
      let data = {
        productName: productName,
        productDescription: productDescription,
        productCategory: productCategory,
        productType: productType,
        productImg: image,
        productVideo: video,
      };

      console.log(data);
      await apiFunctions
        .POST_REQUEST(BASE_URL + API_URL.CREATE_PRODUCT, data)
        .then((res) => {
          console.log(res, "res");
          if (res.status == 201) {
            alert(`${res.data.message}`);
            // toast({
            //   position: "top",
            //   title: `${res.data.message}`,
            //   status: "success",
            //   duration: 1000,
            //   isClosable: true,
            // });
            navigate({
              pathname: "/",
            });
            return true;
          } else {
            alert(`There Some Error`);
            return false;
          }
        });
    } catch (err) {
      console.log(err);
      // toast({
      //   position: "top",
      //   title: `There Some Error`,
      //   status: "error",
      //   duration: 1000,
      //   isClosable: true,
      // });
    }
  };

  let img = {
    uploadImg: require("../Main/image.png"),
  };

  function deleteimg() {
    setImage(null);
    document.getElementById("img").value = "";
  }

  function deleteVideo() {
    setVideo(null);
    document.getElementById("video").value = "";
  }

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

  useEffect(() => {
    if (!token) {
      navigate({
        pathname: "/",
      });
    }
  });

  const updateProduct = async () => {
    try {
      let data = {
        productName: productName,
        productDescription: productDescription,
        productCategory: productCategory,
        productType: productType,
        productImg: image,
        productVideo: video,
      };

      await apiFunctions
        .PUT_REQUEST(BASE_URL + API_URL.UPDATE_PRODUCT + productId, data)
        .then((res) => {
          if (res.data.success == true) {
            alert(`${res.data.message}`);
            // toast({
            //   position: "top",
            //   title: `Updated SuccessFully`,
            //   status: "success",
            //   duration: 1000,
            //   isClosable: true,
            // });

            navigate("/");

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
      <Header></Header>

      <div className="container" style={{ marginTop: "8rem" }}>
        {Edit === "true" ? (
          <h2 class="section-title"> {t("updateProductHeading")}</h2>
        ) : (
          <h2 class="section-title"> {t("createProductHeading")}</h2>
        )}
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
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>{t("description")}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={t("description")}
                  onChange={(e) => setProductDescription(e.target.value)}
                  value={productDescription}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t("category")}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t("category")}
                  onChange={(e) => setProductCategory(e.target.value)}
                  value={productCategory}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>{t("type")}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={t(" type")}
                  onChange={(e) => setProductType(e.target.value)}
                  value={productType}
                />
              </Form.Group>
            </Form>

            {video || image ? (
              <div>
                {Edit === "true" ? (
                  <div className="text-center">
                    <Button
                      className="mt-1"
                      style={{
                        backgroundColor: "#224480",
                        border: "none",
                        color: "white",
                        width: "35%",
                      }}
                      onClick={updateProduct}
                    >
                      {t("updateBtn")}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Button
                      className="mt-1"
                      style={{
                        backgroundColor: "#224480",
                        border: "none",
                        color: "white",
                        width: "35%",
                      }}
                      onClick={createProduct}
                    >
                      {t("saveBtn")}
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {Edit === "true" ? (
                  <div className="text-center">
                    <Button
                      className="mt-1"
                      style={{
                        backgroundColor: "#224480",
                        border: "none",
                        color: "white",
                        width: "35%",
                        cursor: "no-drop",
                      }}
                      disabled
                      onClick={updateProduct}
                    >
                      {t("updateBtn")}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Button
                      className="mt-1"
                      style={{
                        backgroundColor: "#224480",
                        border: "none",
                        color: "white",
                        width: "35%",
                        cursor: "no-drop",
                      }}
                      disabled
                      onClick={createProduct}
                    >
                      {t("saveBtn")}
                    </Button>
                  </div>
                )}
              </div>
            )}
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
                    id="img"
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

            <Button h="1.75rem" size="sm" onClick={deleteimg}>
              Delete Image
            </Button>

            <div
              style={{
                width: "35%",
                marginTop: "12px",
                backgroundColor: "#224480",
                color: "white",
              }}
              class=" my-Upload file btn  btn-Upload"
            >
              {t("uploadPicture")}
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
                    <source src={video} type="video/mp4" id="video"></source>
                  </video>
                </div>
              ) : (
                <div className="file-container">
                  <img src={img.uploadImg} alt="example" />
                </div>
              )}
            </section>

            <Button h="1.75rem" size="sm" onClick={deleteVideo}>
              Delete Video
            </Button>

            <div
              style={{
                width: "35%",
                // marginTop: "8px",
                backgroundColor: "#224480",
                color: "white",
              }}
              className="my-Upload file btn btn-Upload"
            >
              {t("uploadVideo")}
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
