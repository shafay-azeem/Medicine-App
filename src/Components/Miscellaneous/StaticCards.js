import React, { useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../Miscellaneous/StaticCards.css";
import CountUp from "react-countup";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const StaticCards = () => {
  const { t } = useTranslation();
  let img = {
    NumberOfProducts: require("./importing per year.jpg"),
    NumberOfBranches: require("./no of Branches.jpg"),
    NumberOfCustomers: require("./mumber of customers.jpg"),
    NumberOfCars: require("./number of vehicles.jpg"),
    importBanner: require("..//Miscellaneous/about-us-hero.jpg"),
    email: require('./StaticCardsImages/email.png'),
    adress: require('./StaticCardsImages/location.png'),
    phone: require('./StaticCardsImages/contact.png'),
    cover: require('./StaticCardsImages/g2.jpg')
  };

  return (
    <>
      <Header />
      <div className="container" style={{
        marginTop: '70px'
      }}>
        <div class="contact3 py-5">
          <div class="row no-gutters">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card">
                    <img src={img.cover} class="img-fluid" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="contact-box ml-3">
                    <h1 class="font-weight-light mt-2">Quick Contact</h1>
                    <form class="mt-4">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input class="form-control" type="text" placeholder="name" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input class="form-control" type="email" placeholder="email address" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input class="form-control" type="text" placeholder="phone" />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <textarea class="form-control" rows="3" placeholder="message"></textarea>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <button type="submit" class="mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="col-lg-12 mt-3">
                  <div class="card mt-4 border-0 mb-4">
                    <div class="row">
                      <div class="col-lg-4 col-md-4">
                        <div class="card-body d-flex align-items-center c-detail pl-0">
                          <div class="mr-3 align-self-center">
                            <img src={img.adress} />
                          </div>
                          <div class="">
                            <p class="ms-2">Aden, Yemen</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="card-body d-flex align-items-center c-detail">
                          <div class="mr-3 align-self-center">
                            <img src={img.phone} />
                          </div>
                          <div class="">
                            <p class="ms-2">+967 774577776</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="card-body d-flex align-items-center c-detail">
                          <div class="mr-3 align-self-center">
                            <img src={img.email} />
                          </div>
                          <div class="">
                            <p class="Email ms-2">
                              muneer.alicompany@gmail.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default StaticCards;
