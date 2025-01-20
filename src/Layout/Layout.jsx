import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selecteCart } from "../Redux/ecartSlice";
import NavBar from "../components/NavBar";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header"; // Add a separate Header component
import { useNavigate } from "react-router-dom";

const Layout = ({ children, page }) => {
  const cart = useSelector(selecteCart);
  const navigate = useNavigate();
  // Calculate the total quantity
  const totalCartQuantity = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  // Calculate the total price (without toFixed in the reducer)
  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      (item.price - item.price * (item.discountPercentage / 100)) *
        (item.quantity || 1),
    0
  );

  return (
    <div>
      <div className="fixed-top">
        <NavBar totalCartQuantity={totalCartQuantity} />
        {page !== "without" &&
          (page === "cart" ? (
            totalPrice && (
              <header className="show">
                <div className="row bg-light d-flex justify-content-between align-items-center py-3">
                  <div className="col">TOTAL QTY: {totalCartQuantity}</div>
                  <div className="col">
                    TOTAL Price : ${totalPrice.toFixed(2)}
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        localStorage.setItem("cart", JSON.stringify([]));
                        navigate("/thank-you");
                      }}
                    >
                      Proceed to pay
                    </button>
                  </div>
                </div>
              </header>
            )
          ) : (
            <Header />
          ))}
      </div>
      {children}
      <ToastContainer />
    </div>
  );
};

export default Layout;
