import React from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Footer from "../Miscellaneous/Footer";
import Header from "../Miscellaneous/Header";
import "./ViewDetail.css";

const ViewDetail = () => {
  const [searchparams] = useSearchParams();
  const navigate = useNavigate();
  let img = searchparams.get("img");
  let price = searchparams.get("price");
  let description = searchparams.get("description");
  let name = searchparams.get("name");
  let token = localStorage.getItem('token')


  const EditProduct = (img, price, description, name) => {
    console.log("_+_+_")
    let Edit = true
    navigate({
      pathname: "/addproduct",
      search: createSearchParams({
        Edit
      }).toString()
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
                      <img id="main-image" src={img} width="250" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="mt-4 mb-3">
                      <span className="text-uppercase text-blue brand">
                        Tag
                      </span>
                      <h5 className="text-uppercase productName">{name}</h5>
                      <div className="price d-flex flex-row align-items-center">
                        {/* <div className="ml-2 priceStyle">
                          <span>Rs {price}</span>
                        </div> */}
                      </div>
                    </div>
                    <p className="about">{description}</p>
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Category</th>
                          <td>&nbsp;antibiotic</td>
                        </tr>
                        <tr>
                          <th>Type</th>
                          <td>&nbsp;capsule</td>
                        </tr>
                        <tr>
                          <th>&nbsp;Milligram</th>
                          <td>&nbsp;500mg</td>
                        </tr>
                      </tbody>
                    </table>

                    {token ? (
                      <div class="d-flex">
                        <div className="btnStyling me-3">
                          <a className="btnTextStyling" onClick={EditProduct}>Edit</a>
                        </div>
                        <div className="btnStyling">
                          <a className="btnTextStyling">Delete</a>
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
