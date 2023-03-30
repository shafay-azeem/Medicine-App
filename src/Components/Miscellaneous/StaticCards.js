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
    email: require("./StaticCardsImages/email.png"),
    adress: require("./StaticCardsImages/location.png"),
    phone: require("./StaticCardsImages/contact.png"),
    cover: require("./StaticCardsImages/g2.jpg"),
  };
  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mbtchfa",
        "template_vorw56g",
        form.current,
        "wjISGAvtOLmGLG-eg"
      )
      .then(
        (result) => {
          alert(t("contactUsAlert"));
          navigate({
            pathname: "/",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <div
        className="container"
        style={{
          marginTop: "70px",
        }}
      >
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
                    <h1 class="section-title mt-2">{t("contactUs")}</h1>
                    <form class="mt-4" ref={form} onSubmit={sendEmail}>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input
                              class="form-control"
                              type="text"
                              placeholder={t("name")}
                              name="user_name"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input
                              class="form-control"
                              type="email"
                              placeholder={t("emailAddress")}
                              name="user_email"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <input
                              class="form-control"
                              type="number"
                              placeholder={t("phonenumber")}
                              name="user_phone"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="form-group mt-2">
                            <textarea
                              class="form-control"
                              rows="3"
                              placeholder={t("message")}
                              name="message"
                              required
                            ></textarea>
                          </div>
                        </div>

                        <div class="col-lg-12 text-center">
                          <input
                            type="submit"
                            class="mt-3 border-0 px-3 py-2 "
                            value={t("sendBtn")}
                            style={{
                              backgroundColor: "#224480",
                              color: "white",
                            }}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="col-lg-12 mt-3" dir="ltr">
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
                            <p class="ms-2">muneer.alicompany@gmail.com</p>
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
