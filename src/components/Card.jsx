import { useDispatch } from "react-redux";
import { decrease_cart, increase_cart, remove_cart } from "../Redux/ecartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ item, index, quantities }) => {
  const dispatch = useDispatch();
  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decrease_cart({ id }));
    }
  };

  const handleIncrease = (id, quantity, stock) => {
    if (quantity < stock) {
      return dispatch(increase_cart({ id }));
    }
    toast.error("Available stock is " + stock);
  };

  const handleDelete = (id) => {
    dispatch(remove_cart({ id }));
  };
  const price = item.price;
  const Dprice = price * (item.discountPercentage / 100);
  const priceAfterDiscount = (
    item.price -
    item.price * (item.discountPercentage / 100)
  ).toFixed(2);
  let subTotal;
  item.quantity == undefined
    ? (subTotal = (priceAfterDiscount * 1).toFixed(2))
    : (subTotal = (priceAfterDiscount * item.quantity).toFixed(2));

  return (
    <div
      key={item.id}
      className="col-12 d-flex justify-content-center align-items-center "
    >
      <div
        className="card mb-3 shadow"
        style={{ width: "80%", borderRadius: "20px" }}
      >
        <div className="row g-0 ">
          <div className="col-md-5 d-flex justify-content-center align-items-center ">
            <div>
              <div id={`carouselExample${index}`} className="carousel slide">
                <div className="carousel-inner">
                  {item.images[0] == undefined ? (
                    <div className={`carousel-item active`}>
                      <img
                        src={`https://placehold.co/600x600?text=${item.title}`}
                        className="d-block w-100"
                      />
                    </div>
                  ) : (
                    item.images.map((image, i) => (
                      <div
                        key={i}
                        className={`carousel-item ${i === 0 ? "active" : ""}`}
                      >
                        <img
                          src={image}
                          className="d-block w-100"
                          alt={`Slide ${i}`}
                        />
                      </div>
                    ))
                  )}
                </div>

                <div className="d-flex ">
                  <button
                    className="carousel-control-prev my-auto"
                    type="button"
                    data-bs-target={`#carouselExample${index}`}
                    data-bs-slide="prev"
                    style={{
                      backgroundColor: "black",
                      height: "2.5em",
                      width: "2em",
                    }}
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                </div>
                <button
                  className="carousel-control-next  my-auto"
                  type="button"
                  data-bs-target={`#carouselExample${index}`}
                  data-bs-slide="next"
                  style={{
                    backgroundColor: "black",
                    height: "2.5em",
                    width: "2em",
                  }}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-7 ">
            <div className="row g-0">
              <div className="col-md">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                    <div className="col">
                      <h5 className="card-title d-flex justify-content-end ">
                        ${item.price}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="card-text">
                        <b>Brand : </b>
                        {item.brand}
                      </p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <p className="card-text text-success ">
                        Discount Offer : {item.discountPercentage}%
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="card-text">{item.description}</p>
                    </div>
                    <div className="col d-flex justify-content-end"></div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="card-text text-danger">
                        In Stock : {item.stock}
                      </p>
                    </div>
                    <div className="col d-flex justify-content-end"></div>
                  </div>
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <h5 className="review-stat">Rating: {item.rating}</h5>
                    </div>
                    <div className="row">
                      <div className="col small-ratings">
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star rating-color"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="col"></div>
                    </div>
                    <div className="d-flex align-items-center btn-n">
                      <button
                        className="mx-2 quantity-btn p-2 dec-btn"
                        onClick={() =>
                          handleDecrease(item.id, item.quantity || 1)
                        }
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <h6 className="mx-2"> {quantities[item.id]}</h6>
                      <button
                        className="mx-2 quantity-btn p-2 inc-btn"
                        onClick={() => {
                          handleIncrease(
                            item.id,
                            item.quantity || 1,
                            item.stock
                          );
                        }}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col card-text d-flex align-items-center ">
                      <small className="text-muted d-flex align-items-center">
                        Last updated 3 mins ago
                      </small>
                    </div>
                    <div className="d-flex justify-content-end" id="btn-div">
                      <button
                        className="btn btn-danger"
                        id="btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0 p-4 subtotal">
              <div className="col ">
                <div className="row">
                  <div className="card-title col">
                    Original Price (1 item) :
                  </div>
                  <div className="card-title col text-end">${price}</div>
                </div>
                <div className="row">
                  <div className="card-title col text-success">
                    Discount Amount :
                  </div>
                  <div className="card-title col text-end text-success">
                    ${Math.round(price - (price - Dprice))}
                  </div>
                </div>
                <div className="row">
                  <div className="card-title col">
                    Final Price (Price - Discount) :
                  </div>
                  <div className="card-title col  text-end ">
                    ${priceAfterDiscount}
                  </div>
                </div>
                <div className="row">
                  <div className="card-title col d-flex align-items-center">
                    Sub-Total Amount (Final price * Quantity) :
                  </div>
                  <div className="card-title col text-end fs-4 fw-normal">
                    ${subTotal}
                  </div>
                </div>
                {/* <div className="row">
        <div className="card-title col d-flex align-items-center"></div>
        <div className="card-title col text-end fs-4 fw-normal">
          <button className="btn btn-primary">
            Proceed to pay
          </button>
        </div>
      </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
