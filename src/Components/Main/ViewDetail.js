import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Footer from "../Miscellaneous/Footer";
import Header from "../Miscellaneous/Header";
import "./ViewDetail.css";
import { useTranslation } from "react-i18next";
import apiFunctions from "../../global/GlobalFunction";
import { API_URL, BASE_URL } from "../../global/Constant";

const ViewDetail = () => {
  const [searchparams] = useSearchParams();
  const navigate = useNavigate();
  let productId = searchparams.get("id");
  let token = localStorage.getItem("token");

  const [product, setProduct] = useState();

  const { t } = useTranslation();
  const EditProduct = () => {
    let Edit = true;
    navigate({
      pathname: "/addproduct",
      search: createSearchParams({
        Edit,
        productId,
      }).toString(),
    });
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  async function getSingleProduct() {
    let getSingleProduct = await apiFunctions.GET_REQUEST(
      BASE_URL + API_URL.GET_SINGLE_PRODUCT + productId
    );
    let res = getSingleProduct.data.product;
    setProduct(res);
    return;
  }

  const deleteProduct = async () => {
    await apiFunctions
      .DELETE_REQUEST(BASE_URL + API_URL.DELETE_PRODUCT + productId)
      .then((res) => {
        if (res.data.success == true) {
          // toast({
          //   position: "top",
          //   title: `${res.data.message}`,
          //   status: "success",
          //   duration: 1000,
          //   isClosable: true,
          // });
          navigate({
            pathname: "/",
          });
          return true;
        } else {
          // toast({
          //   position: "top",
          //   title: `There Some Error`,
          //   status: "error",
          //   duration: 1000,
          //   isClosable: true,
          // });
          return false;
        }
      });
  };

  return (
    <>
      <Header></Header>
      <div className="container mb-5" dir="ltr">
        <div
          className="row d-flex justify-content-center"
          style={{ marginTop: "7rem" }}
        >
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      {product?.productVideo ? (
                        <video width="100%" height="100%" controls>
                          <source
                            src={product?.productVideo}
                            type="video/mp4"
                            className="img-fluid"
                          ></source>
                        </video>
                      ) : (
                        <img
                          id="main-image"
                          src={product?.productImg}
                          // width="250"
                          className="img-fluid"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="mt-4 mb-3">
                      <span className="text-uppercase text-blue brand">
                        Tag
                      </span>
                      <h5 className="text-uppercase productName">
                        {product?.productName}
                      </h5>
                      <div className="price d-flex flex-row align-items-center">
                        {/* <div className="ml-2 priceStyle">
                          <span>Rs {price}</span>
                        </div> */}
                      </div>
                    </div>
                    <p className="about">{product?.productDescription}</p>
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Category</th>
                          <td>&nbsp;{product?.productCategory}</td>
                        </tr>
                        <tr>
                          <th>Type</th>
                          <td>&nbsp;{product?.productType}</td>
                        </tr>
                      </tbody>
                    </table>

                    {token ? (
                      <div class="d-flex">
                        <div className="btnStyling me-3">
                          <a className="btnTextStyling" onClick={EditProduct}>
                            {t("editbtn")}
                          </a>
                        </div>
                        <div className="btnStyling">
                          <a className="btnTextStyling" onClick={deleteProduct}>
                            {t("deletebtn")}
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default ViewDetail;
