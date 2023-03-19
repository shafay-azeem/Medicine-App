import React from "react";
import Header from "../Miscellaneous/Header";
import "../Main/OurServices.css";
import { useTranslation } from 'react-i18next';
import i18next from "i18next"
import Footer from "../Miscellaneous/Footer";

const OurServices = () => {

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section class="section-big main-color" style={{ marginTop: "5rem" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12 pb-20 text-center">
              <h2 class="section-title mb-10">{t("ourServices")}</h2>
              <p class="section-sub-title">

                {t("companyDescription")}
              </p>
              <div class="exp-separator center-separator">
                <div class="exp-separator-inner"></div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <ul class="i-list medium">
                <li
                  class="i-list-item"
                //   style={{ backgroundColor: "red", marginBottom: "25px" }}
                >
                  <div class="icon">
                    <i class="fa fa-desktop"></i>
                  </div>

                  <div class="icon-content">
                    <h3 class="title">{t("importing")}</h3>
                    <p class="sub-title">
                      {t("importingDescription")}
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>

                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-code"></i>
                  </div>

                  <div class="icon-content">
                    <h3 class="title">  {t("registrationAffairs")}</h3>

                    <p class="sub-title">
                      {t("registrationAffairsDescription")}

                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-paper-plane"></i>
                  </div>

                  <div class="icon-content">
                    <h3 class="title">      {t("Marketing&Promotion")}</h3>
                    <p class="sub-title">
                      {t("Marketing&PromotionDescription")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="i-list medium">
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-diamond"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">        {t("Distribution")}</h3>
                    <p class="sub-title">
                      {t("DistributionDescription")}
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-recycle"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">  {t("Medicalsupplies")}</h3>
                    <p class="sub-title">
                      {t("MedicalsuppliesDescription")}
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">{t("Babies&childrenhealthproducts")}</h3>
                    <p class="sub-title">
                      {t("Babies&childrenhealthproductsDescription")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="i-list medium">
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-codepen"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">    {t("Cosmetics")}</h3>
                    <p class="sub-title">
                      {t("CosmeticsDescription")}
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-newspaper-o"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">     {t("Naturalherbalmedicine")}</h3>
                    <p class="sub-title">
                      {t("NaturalherbalmedicineDescription")}
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default OurServices;
