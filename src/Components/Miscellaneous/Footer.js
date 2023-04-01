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
                <p className="branchTitle">{t("branch1")}</p>&nbsp;&nbsp;
                <p className="branchTitle">{t("branch2")}</p>&nbsp;&nbsp;
                <p className="branchTitle">{t("branch3")}</p>&nbsp;&nbsp;
                <p className="branchTitle">{t("branch4")}</p>&nbsp;&nbsp;
                <p className="branchTitle">{t("branch5")}</p>&nbsp;&nbsp;
                <p className="branchTitle">{t("branch6")}</p>&nbsp;&nbsp;
                <p className="branchTitle">{t("branch7")}</p>&nbsp;&nbsp;
                <p className="branchTitle">{t("branch8")}</p>
              </div>
            </div>
          </div>
          <hr style={{ color: "#b2b7c1" }}></hr>
        </div>

        <div className="container py-3">
          <div className="row">

            <div className="col-md-1">
              <h6 className="widget_title">Tell No : </h6>
              <p className="branchTitle">+96702325595</p>
            </div>


            <div className="col-lg-10">
              <h6 className="widget_title ms-3">CONTACT</h6>
              <div className="d-lg-flex align-items-center justify-content-around">
                <p className="branchTitle text-center ms-2">+967 779999881 ( sanaa )</p>
                <div className="vl"></div>
                <p className="branchTitle text-center">+967 779999882 (aden , mukala )</p>
                <div className="vl"></div>
                <p className="branchTitle text-center">+967 779999883 ( aden , mukala )</p>
                <div className="vl"></div>
                <p className="branchTitle text-center">+967 779999884 (aden )</p>
                <div className="vl"></div>
                <p className="branchTitle text-center">+967 779999885 ( ibb )</p>
                <div className="vl"></div>
                <p className="branchTitle text-center">+967 779999886  ( aldhale )</p>
                <div className="vl"></div>
                <p className="branchTitle text-center text-center">+967 779999887  ( sanaa )</p>
              </div>

            </div>
            <div className="col-md-1">
              <h6 className="widget_title"> Phone :</h6>
              <p className="branchTitle">+967 774577776</p>
            </div>
          </div>
          <hr style={{ color: "#b2b7c1", marginTop: '30px' }}></hr>
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
                    <li className="hoverStyle">{t("Kenya1")}</li>
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
