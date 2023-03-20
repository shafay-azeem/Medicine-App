import React from "react";
import { useSearchParams } from "react-router-dom";
import "../../App.css";
import Header from "../Miscellaneous/Header";
import AboutBanner from "./aboutUsBanner.png";
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
      <div className="container py-5" style={{ marginTop: "8rem" }}>
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
      </div>
    </>
  );
};
