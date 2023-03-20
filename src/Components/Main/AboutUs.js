import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../App.css";
import Header from "../Miscellaneous/Header";
import AboutBanner from "./aboutUsBanner.png";
import Footer from "../Miscellaneous/Footer";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const AboutUs = () => {
  const [searchparams] = useSearchParams();
  let Allow = searchparams.get("Allow");
  let img = {
    cover: require("../Main/about.jpg"),
    missionVision: require("../Main/mission-vision.jpg"),

    qualityProducts: require("../Main/quality-products.png"),
    trust: require("../Main/trust.png"),
    development: require("../Main/development.png"),
    environment: require("../Main/environment.png"),
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
          <div className="myImage">
            {/* <img className="img-fluid" src={AboutBanner} alt="cover" /> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-3">
            <h2 className="text-center text-medium">{t("AboutUSStart")}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 my-3 py-4">
            <div className="inner p-3">
              <small className="text-blue">{t("whoWeAreHeading")}</small>
              <h2 className="text-left headingStyling">{t("aboutUsTitle")}</h2>
              <p>
                {t("point1")}
                {t("point2")}
              </p>

              <ul>
                <li> {t("point3")}</li>
                <li> {t("point4")}</li>
                <li> {t("point5")}</li>
                <li> {t("point6")}</li>
                <li> {t("point7")}</li>
                <li> {t("point8")}</li>
                <li> {t("point9")}</li>
                <li> {t("point10")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="Main row">
          {/* 1 */}

          <div className="col-lg-6">
            <div className="inner p-3">
              <small className="text-blue">{t("our")}</small>
              <h4 className="subTitleStyle">{t("visionHeading")}</h4>
              <p>{t("visionDescription")}</p>
            </div>

            <div className="inner p-3 ">
              <small className="text-blue">{t("our")}</small>
              <h4 className="subTitleStyle">{t("missionHeading")}</h4>
              <p>{t("missionDescription")}</p>
            </div>

            <div className="inner p-3">
              {/* <h3>{t("valueHeading")}</h3> */}

              <div className="row text-center">
                <div className="col-md-3 col-sm-6">
                  <img
                    className="img-fluid iconImgStyle"
                    src={img.qualityProducts}
                    alt="cover"
                  />
                  <p className="pointsStyling">{t("visionList1")}</p>
                </div>
                <div className="col-md-3 col-sm-6">
                  <img
                    className="img-fluid iconImgStyle"
                    src={img.trust}
                    alt="cover"
                  />
                  <p className="pointsStyling">{t("visionList2")}</p>
                </div>
                <div className="col-md-3 col-sm-6">
                  <img
                    className="img-fluid iconImgStyle"
                    src={img.development}
                    alt="cover"
                  />
                  <p className="pointsStyling">{t("visionList3")}</p>
                </div>
                <div className="col-md-3 col-sm-6">
                  <img
                    className="img-fluid iconImgStyle"
                    src={img.environment}
                    alt="cover"
                  />
                  <p className="pointsStyling">{t("visionList4")}</p>
                </div>
              </div>
            </div>

            <div className="inner p-3 ">
              <h3>{t("legalityHeading")}</h3>
              <p>
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

          <div className="col-lg-6 text-end">
            <img className="img-fluid" src={img.missionVision} />
          </div>

          {/* <div className="Sub-Div col-lg-3 my-5">
            <div className="inner p-3 ">
              <h3 className="text-center">{t("visionHeading")}</h3>
              <p className="text-center">{t("visionDescription")}</p>
            </div>
          </div> */}

          {/* 2 */}
          {/* <div className="col-lg-3 my-5  d-flex align-items-center justify-content-center">
            <div className="inner p-3 ">
              <h3 className="text-center">{t("missionHeading")}</h3>
              <p className="text-center">{t("missionDescription")}</p>
            </div>
          </div> */}

          {/* 3 */}
          {/* <div className="col-lg-3 my-5 ">
            <div className="inner p-3 ">
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
          </div> */}

          {/* 4 */}
          {/* <div className="col-lg-3   my-5 d-flex align-items-center justify-content-center">
            <div className="inner p-3 ">
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
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
