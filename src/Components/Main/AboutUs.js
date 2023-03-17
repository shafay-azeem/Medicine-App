import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../App.css";
import Header from "../Miscellaneous/Header";
import AboutBanner from "./aboutUsBanner.png";

export const AboutUs = () => {
  const [searchparams] = useSearchParams();
  let Allow = searchparams.get("Allow");
  let image = {
    cover: require("../Main/about.jpg"),
  };
  return (
    <>
      <Header Allow={Allow}></Header>
      <div className="container py-5" style={{ marginTop: "8rem" }}>
        <div className="row shadow">
          <div className="col-md-6 ">
            <h1
              className="Heading text-center py-3"
              style={{ textTransform: "capitalize" }}
            >
              About Us
            </h1>
            <h3
              className="sub-Heading mb-3 mt-3 text-center"
              style={{ textTransform: "capitalize" }}
            >
              Sub Heading Goes Here
            </h3>
            <p
              className="sub-Heading  mt-3"
              style={{ padding: "0px 30px 0px 30px", textAlign: "justify" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like)
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={AboutBanner} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
