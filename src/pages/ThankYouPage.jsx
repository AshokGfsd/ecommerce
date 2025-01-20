import React from "react";

const ThankYouPage = () => {
  return (
    <div className="container text-center my-5">
      <h1>Thank You for Your Purchase!</h1>
      <p className="text-muted mt-3">
        We appreciate your business and hope you enjoy your new products.
      </p>
      <img
        src="https://via.placeholder.com/400x300"
        alt="Thank You"
        className="img-fluid my-4"
      />
      <div>
        <button
          className="btn btn-primary mx-2"
          onClick={() => (window.location.href = "/products")}
        >
          Continue Shopping
        </button>
        <button
          className="btn btn-secondary mx-2"
          onClick={() => (window.location.href = "/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
