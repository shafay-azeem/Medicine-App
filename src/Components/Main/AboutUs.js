import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../App.css";
import Header from "../Miscellaneous/Header";
import AboutBanner from "./aboutUsBanner.png";
import Footer from "../Miscellaneous/Footer"
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const AboutUs = () => {
  const [searchparams] = useSearchParams();
  let Allow = searchparams.get("Allow");
  let image = {
    cover: require("../Main/about.jpg"),
  };
  const { t } = useTranslation();
  return (
    <>
      <Header Allow={Allow}></Header>
      {/* <div className="container py-5" style={{ marginTop: "8rem" }}>
        <div className="row shadow">
          <div className="col-md-6 ">
            <p>{t("AboutUSStart")}</p>
            <h1
              className="Heading text-center py-3"
              style={{ textTransform: "capitalize" }}
            >
              {t("visionHeading")}
            </h1>
            <p>{t("visionDescription")}</p>

            <h1
              className="Heading text-center py-3"
              style={{ textTransform: "capitalize" }}
            >
              {t("missionHeading")}
            </h1>
            <p>{t("missionDescription")}</p>

            <h1
              className="Heading text-center py-3"
              style={{ textTransform: "capitalize" }}
            >
              {t("valueHeading")}
            </h1>
            <p>
              {t("visionList1")}
              <br></br> <br></br>
              {t("visionList2")}
              <br></br> <br></br>
              {t("visionList3")}
              <br></br> <br></br>
              {t("visionList4")}
              <br></br> <br></br>
            </p>

            <h1
              className="Heading text-center py-3"
              style={{ textTransform: "capitalize" }}
            >
              {t("aboutUsTitle")}
            </h1>
            <h3
              className="sub-Heading mb-3 mt-3 text-center"
              style={{ textTransform: "capitalize" }}
            >
              {t("whoWeAreHeading")}
            </h3>
            <p
              className="sub-Heading  mt-3"
              style={{ padding: "0px 30px 0px 30px", textAlign: "justify" }}
            >
              {t("point1")}
              <br></br> <br></br>
              {t("point2")}
              <br></br> <br></br>
              {t("point3")}
              <br></br> <br></br>
              {t("point4")}
              <br></br> <br></br>
              {t("point5")}
              <br></br> <br></br>
              {t("point6")}
              <br></br> <br></br>
              {t("point7")}
              <br></br> <br></br>
              {t("point8")}
              <br></br> <br></br>
              {t("point9")}
              <br></br> <br></br>
              {t("point10")}
            </p>

            <p
              className="sub-Heading  mt-3"
              style={{ padding: "0px 30px 0px 30px", textAlign: "justify" }}
            >
              {t("aboutUsPoint1")}
              <br></br> <br></br>
              {t("aboutUsPoint2")}
              <br></br> <br></br>
              {t("aboutUsPoint3")}
              <br></br> <br></br>
              {t("aboutUsPoint4")}
              <br></br> <br></br>
              {t("aboutUsPoint5")}
              <br></br> <br></br>
              {t("aboutUsPoint6")}
              <br></br> <br></br>
              {t("aboutUsPoint7")}
            </p>

            <h1
              className="Heading text-center py-3"
              style={{ textTransform: "capitalize" }}
            >
              {t("legalityHeading")}
            </h1>
            <p>
              {t("legalityPoint1")}
              <br></br> <br></br>
              {t("legalityPoint2")}
              <br></br> <br></br>
              {t("legalityPoint3")}
              <br></br> <br></br>
              {t("legalityPoint4")}
              <br></br> <br></br>
              {t("legalityPoint5")}
              <br></br> <br></br>
              {t("legalityPoint6")}
              <br></br> <br></br>
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={AboutBanner} alt="img" />
          </div>
        </div>
      </div> */}

      <div className="container py-5 align-items-center">
        <div className="row py-4 d-flex align-items-center justify-content-center">
          <div className="col-lg-6">
            <img className="img-fluid" src={AboutBanner} alt='cover' />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-3">
            <h2 className="text-center">
              {t("AboutUSStart")}
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 my-3 py-4 shadow">
            <div className="inner p-3">
              <h2 className="text-center">
                {t("aboutUsTitle")}
              </h2>
              <h3 className="px-4 py-2 text-center">
                {t("whoWeAreHeading")}
              </h3>
              <p className="text-start">
                {t("point1")}
                <br />
                {t("point2")}
                <br />
                {t("point3")}
                <br />
                {t("point4")}
                <br />
                {t("point5")}
                <br />
                {t("point6")}
                <br />
                {t("point7")}
                <br />
                {t("point8")}
                <br />
                {t("point9")}
                <br />
                {t("point10")}
                <br />
              </p>
            </div>

          </div>
        </div>

        <div className="Main row">
          {/* 1 */}
          <div className="Sub-Div col-lg-3 my-5 shadow ">
            <div className="inner p-3">
              <h3 className="text-center">{t("visionHeading")}</h3>
              <p className="text-center">{t("visionDescription")}</p>
            </div>
          </div>

          {/* 2 */}
          <div className="col-lg-3 my-5 shadow d-flex align-items-center justify-content-center">
            <div className="inner p-3">
              <h3 className="text-center">{t("missionHeading")}</h3>
              <p className="text-center">{t("missionDescription")}</p>
            </div>
          </div>

          {/* 3 */}
          <div className="col-lg-3 my-5 shadow">
            <div className="inner p-3">
              <h3 className="text-center">{t("valueHeading")}</h3>
              <p className="text-center">
                {t("visionList1")}
                <br />
                {t("visionList2")}
                <br />
                {t("visionList3")}
                <br />
                {t("visionList4")}
                <br />
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="col-lg-3 shadow  my-5 shadow d-flex align-items-center justify-content-center">
            <div className="inner p-3">
              <h3 className="text-center">{t("legalityHeading")}</h3>
              <p className="text-center">
                {t("legalityPoint1")}
                <br />
                {t("legalityPoint2")}
                <br />
                {t("legalityPoint3")}
                <br />
                {t("legalityPoint4")}
                <br />
                {t("legalityPoint5")}
                <br />
                {t("legalityPoint6")}
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
