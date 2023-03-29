import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Header from "../Miscellaneous/Header";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./ViewProducts.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Footer from "../Miscellaneous/Footer";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";

export const ViewProducts = () => {
  let img = {
    banner: require("./banner.jpg"),
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

        <div className=" row no-gutter flex-column">
          <div
            style={{
              marginTop: "110px",
            }}
          >
            <img src={img.banner} class="img-fluid" />
          </div>
        </div>

        {/* <div class="row no-gutter flex-column mt-5">
          <img src={img.banner} class="img-fluid" />
        </div> */}
        <Container style={{ marginTop: "1rem", marginBottom: "5rem" }}>
          <Row>
            {medicineList?.map((x, index) => {
              return (
                <>
                  <div
                    className=" col-lg-4 d-flex justify-content-center align-items-center"
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
                          width: "auto",
                          maxWidth: "100%",
                          height: "250px",
                          padding: "30px",
                          alignSelf: "center",
                        }}
                        variant="top"
                        src={x.productImg}
                      />
                      <Card.Body>
                        <p
                          className="text-center cartStyle"
                          style={{ cursor: "pointer" }}
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
