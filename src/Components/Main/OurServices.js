import React from "react";
import Header from "../Miscellaneous/Header";
import "../Main/OurServices.css";
import { useTranslation } from 'react-i18next';
import i18next from "i18next"
import Footer from "../Miscellaneous/Footer";
import { Card } from "react-bootstrap";

const OurServices = () => {

  const { t } = useTranslation();
  let img = {
    importing: require('./Our Services Images/importing.jpeg'),
    dustribution: require('./Our Services Images/Distribution 11.jpg'),
    cosmetics: require('./Our Services Images/cosmetics.jpg'),

    registration: require('./Our Services Images/registeration affairs.jpg'),
    medicalSupplies: require('./Our Services Images/medical-supplies-624567292.jpg'),
    herbal: require('./Our Services Images/natural-herbal-medicine_75924-13042.jpg'),

    marketing: require('./Our Services Images/Marketing-1.jpg'),
    babies: require('./Our Services Images/babies.jpg'),

  }

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

          {/* <div class="row">
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
          </div> */}

          {/* this is row 1 */}

          <div className="row py-2">
            <div className="Main-Body col-md-4 shadow">
              <img style={{
                width: "100%",
                maxWidth: "100%",
                height: "50%",
                padding: "10px",
                alignSelf: "center",
              }} className="img-fluid" src={img.importing} alt='imp' />
              <h2 className="Heading mt-2 text-center">{t("importing")}</h2>
              <p className="Paragraph py-2 text-center text-justify">
                {t("importingDescription")}
              </p>
            </div>

            <div className="Main-Body col-md-4 shadow">
              <img style={{
                width: "100%",
                maxWidth: "100%",
                height: "50%",
                padding: "10px",
                alignSelf: "center",
              }} className="img-fluid" src={img.dustribution} alt='imp' />
              <h2 className="Heading mt-2 text-center">{t("Distribution")}</h2>
              <p className="Paragraph py-2 text-center text-justify">
                {t("DistributionDescription")}
              </p>
            </div>

            <div className="Main-Body col-md-4 shadow">
              <img style={{
                width: "100%",
                maxWidth: "100%",
                height: "50%",
                padding: "10px",
                alignSelf: "center",
              }} className="img-fluid" src={img.cosmetics} alt='imp' />
              <h2 className="Heading mt-2 text-center">{t("Cosmetics")}</h2>
              <p className="Paragraph py-2 text-center text-justify">
                {t("CosmeticsDescription")}
              </p>
            </div>

          </div>

          {/* this is row 2 */}

          <div className="row py-2 my-4">
            <div className="Main-Body col-md-4 shadow">
              <img style={{
                width: "100%",
                maxWidth: "100%",
                height: "50%",
                padding: "10px",
                alignSelf: "center",
              }} className="img-fluid" src={img.registration} alt='imp' />
              <h2 className="Heading mt-2 text-center">{t("registrationAffairs")}</h2>
              <p className="Paragraph py-2 text-center text-justify">
                {t("registrationAffairsDescription")}
              </p>
            </div>

            <div className="Main-Body col-md-4 shadow">
              <img style={{
                width: "100%",
                maxWidth: "100%",
                height: "50%",
                padding: "10px",
                alignSelf: "center",
              }} className="img-fluid" src={img.medicalSupplies} alt='imp' />
              <h2 className="Heading mt-2 text-center">{t("Medicalsupplies")}</h2>
              <p className="Paragraph py-2 text-center text-justify">
                {t("MedicalsuppliesDescription")}
              </p>
            </div>

            <div className="Main-Body col-md-4 shadow">
              <img style={{
                width: "100%",
                maxWidth: "100%",
                height: "50%",
                padding: "10px",
                alignSelf: "center",
              }} className="img-fluid" src={img.herbal} alt='imp' />
              <h2 className="Heading mt-2 text-center">{t("Naturalherbalmedicine")}</h2>
              <p className="Paragraph py-2 text-center text-justify">
                {t("NaturalherbalmedicineDescription")}
              </p>
            </div>
          </div>



          {/* this is row 3  */}
          <div className="row py-2 my-4">
            <div className="Main-Body col-md-4 shadow">
              <img style={{
                width: "100%",
                maxWidth: "100%",
                height: "50%",
                padding: "10px",
                alignSelf: "center",
              }} className="img-fluid" src={img.babies} alt='imp' />
              <h2 className="Heading mt-2 text-center">{t("Babies&childrenhealthproducts")}</h2>
              <p className="Paragraph py-2 text-center text-justify">
                {t("Babies&childrenhealthproductsDescription")}
              </p>
            </div>

            <div className="Main-Body col-md-4 shadow">
              <img style={{
                width: "100%",
                maxWidth: "100%",
                height: "50%",
                padding: "10px",
                alignSelf: "center",
              }} className="img-fluid" src={img.marketing} alt='imp' />
              <h2 className="Heading mt-2 text-center">{t("Marketing&Promotion")}</h2>
              <p className="Paragraph py-2 text-center text-justify">
                {t("Marketing&PromotionDescription")}
              </p>
            </div>

          </div>

        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default OurServices;