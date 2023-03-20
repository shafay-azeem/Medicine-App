import React from "react";
import Header from "../Miscellaneous/Header";
import "../Main/OurServices.css";
import { useTranslation } from "react-i18next";

import Footer from "../Miscellaneous/Footer";

const OurServices = () => {
  const { t } = useTranslation();
  let img = {
    importing: require("./Our Services Images/importing.jpg"),
    dustribution: require("./Our Services Images/Distribution 11.jpg"),
    cosmetics: require("./Our Services Images/cosmetics.jpg"),

    registration: require("./Our Services Images/registeration affairs.jpg"),
    medicalSupplies: require("./Our Services Images/medical-supplies-624567292.jpg"),
    herbal: require("./Our Services Images/natural-herbal-medicine_75924-13042.jpg"),

    marketing: require("./Our Services Images/Marketing-1.jpg"),
    babies: require("./Our Services Images/babies.jpg"),
  };

  return (
    <>
      <Header />
      <section class="section-big main-color" style={{ marginTop: "5rem" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12 pb-20 text-center">
              <h2 class="section-title mb-10">{t("ourServices")}</h2>
              <p class="text-medium ">{t("companyDescription")}</p>
              <div class="exp-separator center-separator">
                <div class="exp-separator-inner"></div>
              </div>
            </div>
          </div>

          <div className="row py-2">
            <div className="col-md-4">
              <div className="Main-Body  px-3 pb-4">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "50%",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                  className="img-fluid"
                  src={img.importing}
                  alt="imp"
                />
                <h4 className="Heading mt-2 text-center">{t("importing")}</h4>
                <p className="Paragraph pt-3 text-center text-justify">
                  {t("importingDescription")}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="Main-Body  px-3 pb-4">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "50%",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                  className="img-fluid"
                  src={img.dustribution}
                  alt="imp"
                />
                <h4 className="Heading mt-2 text-center">
                  {t("Distribution")}
                </h4>
                <p className="Paragraph pt-3 text-center text-justify">
                  {t("DistributionDescription")}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="Main-Body  px-3 pb-4">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "50%",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                  className="img-fluid"
                  src={img.cosmetics}
                  alt="imp"
                />
                <h4 className="Heading mt-2 text-center">{t("Cosmetics")}</h4>
                <p className="Paragraph pt-3 text-center text-justify">
                  {t("CosmeticsDescription")}
                </p>
              </div>
            </div>
          </div>

          {/* this is row 2 */}

          <div className="row py-2 my-4">
            <div className="col-md-4">
              <div className="Main-Body  px-3 pb-4">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "50%",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                  className="img-fluid"
                  src={img.registration}
                  alt="imp"
                />
                <h4 className="Heading mt-2 text-center">
                  {t("registrationAffairs")}
                </h4>
                <p className="Paragraph pt-3 text-center text-justify">
                  {t("registrationAffairsDescription")}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="Main-Body  px-3 pb-4">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "50%",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                  className="img-fluid"
                  src={img.medicalSupplies}
                  alt="imp"
                />
                <h4 className="Heading mt-2 text-center">
                  {t("Medicalsupplies")}
                </h4>
                <p className="Paragraph pt-3 text-center text-justify">
                  {t("MedicalsuppliesDescription")}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="Main-Body  px-3 pb-4">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "50%",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                  className="img-fluid"
                  src={img.herbal}
                  alt="imp"
                />
                <h4 className="Heading mt-2 text-center">
                  {t("Naturalherbalmedicine")}
                </h4>
                <p className="Paragraph pt-3 text-center text-justify">
                  {t("NaturalherbalmedicineDescription")}
                </p>
              </div>
            </div>
          </div>

          {/* this is row 3  */}
          <div className="row py-2 my-4">
            <div className="col-md-4">
              <div className="Main-Body  px-3 pb-4">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "50%",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                  className="img-fluid"
                  src={img.babies}
                  alt="imp"
                />
                <h4 className="Heading mt-2 text-center">
                  {t("Babies&childrenhealthproducts")}
                </h4>
                <p className="Paragraph pt-3 text-center text-justify">
                  {t("Babies&childrenhealthproductsDescription")}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="Main-Body  px-3 pb-4">
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "50%",
                    padding: "10px",
                    alignSelf: "center",
                  }}
                  className="img-fluid"
                  src={img.marketing}
                  alt="imp"
                />
                <h4 className="Heading mt-2 text-center">
                  {t("Marketing&Promotion")}
                </h4>
                <p className="Paragraph pt-3 text-center text-justify">
                  {t("Marketing&PromotionDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default OurServices;
