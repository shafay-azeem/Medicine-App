import React from "react";
import Header from "../Miscellaneous/Header";
import "../Main/OurServices.css";

const OurServices = () => {
  return (
    <>
      <Header />
      <section class="section-big main-color" style={{ marginTop: "5rem" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12 pb-20 text-center">
              <h2 class="section-title mb-10">Our services</h2>
              <p class="section-sub-title">
                Muneer Ali Company participates in the import of medicines,
                medical supplies and cosmetics in all sales, as well as tenders
                for import, registration, marketing, promotion and distribution.
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
                    <h3 class="title">Importing</h3>
                    <p class="sub-title">
                      We are well acquainted with the characteristics of the
                      market and introduce new varieties of products, as we are
                      also importing medicines needed by the market from Europe,
                      India and the Middle East.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>

                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-code"></i>
                  </div>

                  <div class="icon-content">
                    <h3 class="title">Registration affairs</h3>
                    <p class="sub-title">
                      We have good relations with the health authorities in the
                      country and we have a special team for registration and
                      transactions.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-paper-plane"></i>
                  </div>

                  <div class="icon-content">
                    <h3 class="title">Marketing & promotion</h3>
                    <p class="sub-title">
                      We have good experience in the field of selling and
                      marketing products as well as strong relationships in the
                      market through our knowledge of the strengths that we
                      possess and the quality of the Products that are being
                      promoted, we attract doctors and pharmacists and beauty
                      experts.
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
                    <h3 class="title">Distribution</h3>
                    <p class="sub-title">
                      We have an independent distribution department where we
                      train, qualify and provide technical support for
                      distributors in order to enabling them build good
                      relationships with customers and work to create demand for
                      products.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-recycle"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Medical supplies</h3>
                    <p class="sub-title">
                      Medical supplies are imported and provided, which are
                      equipment that are used in hospitals, clinics and medical
                      laboratories ,it includes providing intensive care rooms
                      needs , and medical furniture for hospital ,surgical
                      instruments and diagnostic equipment.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Babies & children health products</h3>
                    <p class="sub-title">
                      Babies and children's products are imported to be suitable
                      for them, as these products are specially made to be light
                      and non-irritating and made from ingredients that are
                      selected by experts and specialists.
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
                    <h3 class="title">Cosmetics</h3>
                    <p class="sub-title">
                      Cosmetics are products used to improve the appearance and
                      health of the skin of the face and body. These products
                      are designed to be used safely on the face and body.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-newspaper-o"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Natural herbal medicine</h3>
                    <p class="sub-title">
                      They are supplied as tablets, capsules, powders, extracts
                      and fresh or dried plants to satisfy the many people who
                      prefer products labeled "natural" that are always safe and
                      good for them.
                    </p>
                  </div>
                  <div class="iconlist-timeline"></div>
                </li>
                <li class="i-list-item">
                  <div class="icon">
                    <i class="fa fa-heart-o"></i>
                  </div>
                  <div class="icon-content">
                    <h3 class="title">Crafted With Love</h3>
                    <p class="sub-title">
                      Aenean vulputate eleifend tellus. Aenean leo ligula,
                      porttitor eu, consequat vitae, eleifend ac lorem ante,
                      dapibus in.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
