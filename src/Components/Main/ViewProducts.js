import React, { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Header from "../Miscellaneous/Header";
import { Card, Container, Row } from "react-bootstrap";
import "./ViewProducts.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Footer from "../Miscellaneous/Footer";

export const ViewProducts = () => {
  const { t } = useTranslation();
  const [searchparams] = useSearchParams();
  let Allow = searchparams.get("Allow");
  let Edit = true;
  const navigate = useNavigate();
  const [medicineList, setMedicineList] = useState([
    {
      Name: "Cefaclor",
      Description:
        "Cefaclor is used to treat certain infections caused by bacteria",
      Price: "150",
      Image:
        "https://bosch-pharma.com/wp-content/uploads/2022/11/cefalor-500mg-capsules.jpg",
    },
    {
      Name: "Aram",
      Description:
        "Aram Tablet is a pain-relieving medicine. It is used to reduce pain and inflammation in conditions like rheumatoid arthritis, ankylosing spondylitis, and osteoarthritis.",
      Price: "220",
      Image:
        "https://bosch-pharma.com/wp-content/uploads/2022/11/aaram-50mg-capsules.jpg",
    },
    {
      Name: "Nuzib",
      Description:
        "Nuzib Capsule is a prescription medicine that is used to relieve the condition of inflammation of joints due to degeneration of cartilage tissue",
      Price: "300",
      Image:
        "https://bosch-pharma.com/wp-content/uploads/2022/11/nuzib-100mg-capsules.jpg",
    },
  ]);
  const AddProduct = () => {
    navigate({
      pathname: "/addproduct",
      search: createSearchParams({
        Edit,
      }).toString(),
    });
  };

  const ViewDetail = (img, price) => {
    navigate({
      pathname: "/viewdetail",
      search: createSearchParams({
        img,
        price,
      }).toString(),
    });
  };

  return (
    <div>
      <Header From={"Home"} Allow={Allow}></Header>
      <Container style={{ marginTop: "4rem", marginBottom: "5rem" }}>
        <Row>
          {medicineList?.map((x, index) => {
            return (
              <>
                <div className="col-lg-4 d-flex justify-content-center">
                  <Card
                    className="border  col-md-4 mb-4 mt-4"
                    style={{
                      width: "20rem",
                      borderStyle: "none",
                      maxHeight: "450px",
                    }}
                  >
                    <Card.Img
                      style={{
                        width: "80%",
                        maxWidth: "100%",
                        height: "50%",
                        padding: "30px",
                        alignSelf: "center",
                      }}
                      variant="top"
                      src={x.Image}
                    />
                    <Card.Body>
                      <p className="text-center cartStyle">{x.Name}</p>

                      <Card.Text className="Description text-center">
                        {x.Description}
                      </Card.Text>

                      {/* <Card.Text className="text-center cartPriceStyle">
                        Rs {x.Price}
                      </Card.Text> */}
                      {Allow === "true" ? (
                        <div className="d-felx justify-content-between align-items-center">
                          <button
                            className="ms-2 edit-Button"
                            onClick={AddProduct}
                          >
                            {t("editbtn")}
                          </button>
                          <button className="ms-2 delete-button ">
                            {t("deletebtn")}
                          </button>
                        </div>
                      ) : (
                        <div>
                          <p
                            onClick={() => ViewDetail(x.Image, x.Price)}
                            className="text-center viewDetailText"
                          >
                            {t("viewDetailsbtn")}
                          </p>
                          {/* <h3 className="text-center"></h3>
                          <button
                            className="cart-button mt-2   gradient"
                            onClick={() => ViewDetail(x.Image, x.Price)}
                          >
                            {t("viewDetailsbtn")}
                          </button> */}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};
