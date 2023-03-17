import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Miscellaneous/Header";
import "./ViewDetail.css";

const ViewDetail = () => {
  // let img = {
  //     mainImage: require('../assets/images/burger.png'),

  const [searchparams] = useSearchParams();

  let img = searchparams.get("img");
  let price = searchparams.get("price");

  // }
  return (
    <>
      <Header From={"Home"}></Header>
      <div
        className="shadow container py-5 bg-white"
        style={{ marginTop: "7rem" }}
      >
        <div className="row">
          {/* Col of 1  */}
          <div className="col-md-1"></div>

          {/* Col of 4  */}
          <div className="col-md-4">
            <img className="Image" src={img} alt="img" />
          </div>

          {/* Col of 6  */}
          <div className="col-md-6">
            <h1 style={{ textTransform: "capitalize" }}>
              Some heading goes here
            </h1>

            <p style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p style={{ fontSize: "25px" }}>Rs. {price}</p>

            {/* <div className="buttons d-flex align-items-center justify-content-start pt-3">
                            <button className='Buy-Button bg-gradient'>BUY NOW</button>
                            <button className='Wish-Button bg-gradient ms-3'>ADD TO WISHLIST</button>
                        </div> */}
          </div>

          {/* Col of 1  */}
          <div className="col-md-1"></div>
          <div className="container">
            <hr className="mt-5" />
          </div>
        </div>
        {/* <h3 className='text-center mt-3'>Recent Views</h3> */}
      </div>
    </>
  );
};

export default ViewDetail;
