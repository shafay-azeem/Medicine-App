import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../Miscellaneous/StaticCards.css";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const StaticCards = () => {
  const { t } = useTranslation();
  let img = {
    NumberOfProducts: require("./importing per year.jpg"),
    NumberOfBranches: require("./no of Branches.jpg"),
    NumberOfCustomers: require("./mumber of customers.jpg"),
    NumberOfCars: require("./number of vehicles.jpg"),
    importBanner: require("..//Miscellaneous/about-us-hero.jpg"),
  };

  return (
    <>
      <Header />
      <section class="page-header">
        <div class="container">
          <div class="row no-gutter flex-column pb-3 mt-4">
            <div class="p-title">{t("OurImports")}</div>
          </div>
          <div class="row no-gutter flex-column">
            <img src={img.importBanner} class="img-fluid" />
          </div>
        </div>
      </section>
      <section class="scounter">
        <div class="container">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="row counters " style={{ backgroundColor: "#224480" }}>
                <div class="col-sm-3">
                  <div class="inner">
                    <span class="head">{t("StaticNumber")}</span>
                    <div class="number">
                      +
                      <CountUp end={1000} duration={5} />
                    </div>
                    <p>{t("ProductsImportedPerYear")}</p>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="inner">
                    <span class="head">{t("StaticNumber")}</span>
                    <div class="number">
                      +
                      <CountUp end={50} duration={5} />
                    </div>
                    <p>{t("Branches")}</p>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="inner">
                    <span class="head">{t("StaticNumber")}</span>
                    <div class="number">
                      +
                      <CountUp end={100} duration={5} />
                    </div>
                    <p>{t("Cars")}</p>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="inner">
                    <span class="head">{t("StaticNumber")}</span>
                    <div class="number">
                      +
                      <CountUp end={500} duration={5} />
                    </div>
                    <p>{t("Cutsomers")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
      </section>

      <section class="content py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-3 ">
              <img
                className="img-fluid imgStyle"
                src={img.NumberOfProducts}
                alt="imp"
              />
            </div>
            <div class="col-sm-3 ">
              <img
                className="img-fluid imgStyle"
                src={img.NumberOfBranches}
                alt="imp"
              />
            </div>
            <div class="col-sm-3 ">
              <img
                className="img-fluid imgStyle"
                src={img.NumberOfCars}
                alt="imp"
              />
            </div>
            <div class="col-sm-3 ">
              <img
                className="img-fluid"
                src={img.NumberOfCustomers}
                alt="imp"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section class="section-big main-color" style={{ marginTop: "5rem" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12 pb-20 text-center">
              <h2 class="section-title mb-10">{t("OurImports")}</h2>

              <div class="exp-separator center-separator">
                <div class="exp-separator-inner"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="row py-2">
                <div className="col-md-6">
                  <div className="Main-Body  px-3 pb-4 shadow">
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        height: "50%",
                        padding: "10px",
                        alignSelf: "center",
                      }}
                      className="img-fluid"
                      src={img.NumberOfProducts}
                      alt="imp"
                    />

                    <p className="countStyling mt-2 text-center">
                      <CountUp end={1000} duration={5} />
                    </p>

                    <p className="Heading mt-2 text-center">{t("static1")}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="Main-Body  px-3 pb-4 shadow">
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        height: "50%",
                        padding: "10px",
                        alignSelf: "center",
                      }}
                      className="img-fluid"
                      src={img.NumberOfBranches}
                      alt="imp"
                    />

                    <p className="countStyling mt-2 text-center">
                      <CountUp end={1000} duration={5} />
                    </p>

                    <p className="Heading mt-2 text-center">{t("static2")}</p>
                  </div>
                </div>
              </div>

              <div className="row py-2 my-4">
                <div className="col-md-6">
                  <div className="Main-Body  px-3 pb-4 shadow">
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        height: "50%",
                        padding: "10px",
                        alignSelf: "center",
                      }}
                      className="img-fluid"
                      src={img.NumberOfCars}
                      alt="imp"
                    />

                    <p className="countStyling mt-2 text-center">
                      <CountUp end={1000} duration={5} />
                    </p>

                    <p className="Heading mt-2 text-center">{t("static3")}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="Main-Body  px-3 pb-4 shadow">
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        height: "50%",
                        padding: "10px",
                        alignSelf: "center",
                      }}
                      className="img-fluid"
                      src={img.NumberOfCustomers}
                      alt="imp"
                    />

                    <p className="countStyling mt-2 text-center">
                      <CountUp end={1000} duration={5} />
                    </p>

                    <p className="Heading mt-2 text-center">{t("static4")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </section> */}
      <Footer></Footer>
    </>
  );
};

export default StaticCards;
