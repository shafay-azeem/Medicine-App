import React from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Miscellaneous/Footer";
import Header from "../Miscellaneous/Header";
import "./ViewDetail.css";

const ViewDetail = () => {
  const [searchparams] = useSearchParams();

  let img = searchparams.get("img");
  let price = searchparams.get("price");

  return (
    <>
      <Header From={"Home"}></Header>
      <div
        className="shadow container py-5 bg-white"
        style={{ marginTop: "7rem", marginBottom: "5rem" }}
      >
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-4">
            <img className="Image" src={img} alt="img" />
          </div>

          <div className="col-md-6">
            <h1 style={{ textTransform: "capitalize" }}>
              Some heading goes here
            </h1>

            <p style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p style={{ fontSize: "25px" }}>Rs. {price}</p>
          </div>

          <div className="col-md-1"></div>
          <div className="container">
            <hr className="mt-5" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewDetail;
