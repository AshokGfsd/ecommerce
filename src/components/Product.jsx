import { useState } from "react";
import "./Product.css";
import { add_cart, remove_cart } from "../Redux/ecartSlice";
import { useDispatch } from "react-redux";

const Product = ({ data: { id, inCart, title, price, images, category } }) => {
  const [status, setStatus] = useState(!inCart);
  const dispatch = useDispatch();

  const AddCart = () => {
    setStatus(false);
    dispatch(add_cart({ id }));
  };

  const RemoveCart = () => {
    setStatus(true);
    dispatch(remove_cart({ id }));
  };

  return (
    <div className="col-12 col-sm-5 col-lg-3 col-xl-2 mb-4">
      <div className="card shadow h-100">
        <img
          className="card-img-top product-image"
          src={
            images[0] == undefined
              ? `https://placehold.co/600x400?text=${title}`
              : images[0]
          }
          alt="Product"
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            <p className="mb-2">${price}</p>
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="d-flex justify-content-center align-items-center h-100">
            {status ? (
              <button className="btn btn-outline-dark w-100" onClick={AddCart}>
                Add to Cart
              </button>
            ) : (
              <button
                className="btn btn-outline-dark w-100"
                onClick={RemoveCart}
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
