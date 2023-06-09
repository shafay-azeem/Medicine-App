import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../App.css";
import Header from "../Miscellaneous/Header";

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
    aboutBanner: require("../Main/aboutUsBanner.jpg"),
  };
  const { t } = useTranslation();
  return (
    <>
      <Header Allow={Allow}></Header>

      <div
        className="container py-5 align-items-center"
        style={{
          marginTop: "50px",
        }}
      >
        <div className="row no-gutter flex-column">
          <div>
            <img src={img.aboutBanner} class="img-fluid" />
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
              {/* <small className="text-blue">{t("our")}</small> */}
              <h4 className="subTitleStyle">{t("visionHeading")}</h4>
              <p>{t("visionDescription")}</p>
            </div>

            <div className="inner p-3 ">
              {/* <small className="text-blue">{t("our")}</small> */}
              <h4 className="subTitleStyle">{t("missionHeading")}</h4>
              <p>{t("missionDescription")}</p>
            </div>

            <div className="inner p-3">
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
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
