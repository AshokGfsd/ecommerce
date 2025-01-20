import React from "react";
import Layout from "../Layout/Layout";

const AboutPage = () => {
  return (
    <Layout page={"without"}>
      <div className="container my-5 mt-5">
        <div className="text-center mb-4">
          <h1>About Us</h1>
          <p className="text-muted">
            Learn more about our mission, vision, and values.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide top-quality products and unparalleled
              customer service to make your shopping experience seamless and
              enjoyable.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Vision</h3>
            <p>
              To become the leading online marketplace, trusted by millions for
              all their shopping needs, driven by innovation and excellence.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Wide range of quality products</li>
              <li>Affordable prices and great discounts</li>
              <li>Fast and reliable delivery</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
