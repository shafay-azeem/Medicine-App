import React from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";
import "../Miscellaneous/Footer.css";

export default function Footer() {
  let images = {
    facebook: require("./Footer Images/facebook.png"),
    google: require("./Footer Images/google.png"),
    instagram: require("./Footer Images/instagram.png"),
    youtube: require("./Footer Images/youtube.png"),
    CompanyLogo: require("./Footer Images/CompanyLogo.png"),
  };

  const { t } = useTranslation();

  return (
    <>
      <footer class="bg-primary-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="col-md-6">
                <h4 className="widget_title">{t("ourBranches")}</h4>
              </div>
            </div>
            <div className="col-md-8">
              <div className="d-flex justify-content-end flex-row flex-lg-row flex-column">
                <p>{t("branch1")}</p>&nbsp;&nbsp;
                <p>{t("branch2")}</p>&nbsp;&nbsp;
                <p>{t("branch3")}</p>&nbsp;&nbsp;
                <p>{t("branch4")}</p>&nbsp;&nbsp;
                <p>{t("branch5")}</p>&nbsp;&nbsp;
                <p>{t("branch6")}</p>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div className="px-5">
                <img
                  className="img-fluid"
                  src={images.CompanyLogo}
                  alt="CompanyLogo"
                />
              </div>
            </div>

            <div class="col-sm-3">
              <div class="widget menu">
                <h3 class="widget_title">{t("kenya")}</h3>
                <div class="widget_content">
                  <ul>
                    <li>{t("Kenya1")}</li>
                    <li>{t("kenya2")}</li>
                    <li>{t("kenya3")}</li>
                    <li>{t("kenya4")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="widget menu">
                <h3 class="widget_title">{t("EGYPT")}</h3>
                <div class="widget_content">
                  <ul>
                    <li>{t("Egypt1")}</li>

                    <li>{t("Egypt2")}</li>
                    <li>{t("Egypt3")}</li>
                    <li>{t("Egypt4")}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="widget menu">
                <h3 class="widget_title">{t("pakistan")}</h3>
                <div class="widget_content">
                  <ul>
                    <li>{t("Pakistan1")}</li>

                    <li>{t("Pakistan2")}</li>
                    <li>{t("Pakistan3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <p class="text-center">
                  {t("Copyright")} &copy; <a>{t("MuneerAliCompany")}</a>
                </p>
              </div>
              <div class="col-md-2 mt-3 m-sm-0">
                <div class="social-icons medium justify-content-sm-end justify-content-center">
                  <div class="item">
                    <a href="#">
                      <span class="fab fa-facebook-f"></span>
                    </a>
                  </div>

                  <div class="item">
                    <a href="#">
                      <span class="fab fa-linkedin-in"></span>
                    </a>
                  </div>

                  <div class="item">
                    <a href="#">
                      <span class="fab fa-twitter"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
