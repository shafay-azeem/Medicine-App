import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Header from "../Miscellaneous/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./ViewProducts.css";
import "../Miscellaneous/StaticCards.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Footer from "../Miscellaneous/Footer";
import apiFunctions from "../../global/GlobalFunction";
import CountUp from "react-countup";
import { API_URL, BASE_URL } from "../../global/Constant";
import CountUp from "react-countup";


export const ViewProducts = () => {
  let img = {
    banner: require("./banner.jpg"),
    NumberOfProducts: require("../Miscellaneous/importing per year.jpg"),
    NumberOfBranches: require("../Miscellaneous/no of Branches.jpg"),
    NumberOfCustomers: require("../Miscellaneous/no of Branches.jpg"),
    NumberOfCars: require("../Miscellaneous/number of vehicles.jpg"),
    importBanner: require("../Miscellaneous/about-us-hero.jpg"),
  };


  const { t } = useTranslation();
  const [searchparams] = useSearchParams();
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [medicineList, setMedicineList] = useState();

  useEffect(() => {
    getAllProducts();
  }, []);

  const ViewDetail = (id) => {
    navigate({
      pathname: "/viewdetail",
      search: createSearchParams({
        id,
      }).toString(),
    });
  };

  async function getAllProducts() {
    let getAllProducts = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_ALL_PRODUCTS
    );
    let res = getAllProducts.data.products;
    setMedicineList(res);

    return;
  }

  return (
    <>
      <div className="container">
        <Header></Header>
        {/* 
        <div className=" row no-gutter flex-column">
          <div
            style={{
              marginTop: "110px",
            }}
          >
            <img src={img.banner} class="img-fluid" />
          </div>
        </div> */}

        {/* <div class="row no-gutter flex-column mt-5">
          <img src={img.banner} class="img-fluid" />
        </div> */}
        <section class="page-header">
          <div class="container" style={{
            marginTop: '50px'
          }}>
            <div class="row no-gutter flex-column pb-3 mt-4">
              <div class="p-title">{t("Career")}</div>
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
                      <span class="head">{t("importedProducts")}</span>
                      <div class="number">
                        +
                        <CountUp end={1000} duration={5} />
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3">
                    <div class="inner">
                      <span class="head">{t("Branches")}</span>
                      <div class="number">
                        +
                        <CountUp end={50} duration={5} />
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3">
                    <div class="inner">
                      <span class="head">{t("Vehicles")}</span>
                      <div class="number">
                        +
                        <CountUp end={100} duration={5} />
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-3">
                    <div class="inner">
                      <span class="head">{t("Cutsomers")}</span>
                      <div class="number">
                        +
                        <CountUp end={500} duration={5} />
                      </div>
                      {/* <p>{t("Cutsomers")}</p> */}
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


        <Container style={{ marginTop: "1rem", marginBottom: "5rem" }}>
          <h2 class="section-title mb-10 text-center">{t("ourProducts")}</h2>
          <Row>
            {medicineList?.map((x, index) => {
              return (
                <>
                  <div
                    className="my-card col-lg-4 d-flex justify-content-center align-items-center"
                    key={index}
                  >
                    <Card
                      className="border  col-md-4 mb-4 mt-4"
                      style={{
                        width: "20rem",
                        borderStyle: "none",
                        maxHeight: "350px",
                      }}
                    >
                      <Card.Img
                        style={{
                          width: "100%",
                          maxWidth: "100%",
                          height: "250px",
                          // padding: "30px",
                          alignSelf: "center",
                        }}
                        variant="top"
                        src={x.productImg}
                      />
                      <Card.Body>
                        <p
                          className="text-center cartStyle"
                          style={{ cursor: "pointer", fontWeight: 'bold', color: 'red', fontSize: '20px' }}
                          onClick={() => ViewDetail(x._id)}
                        >
                          {x.productName}
                        </p>

                        <p
                          onClick={() => ViewDetail(x._id)}
                          className="text-center viewDetailText"
                        >
                          {t("viewDetailsbtn")}
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              );
            })}
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};
