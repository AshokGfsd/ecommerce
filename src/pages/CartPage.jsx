import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selecteCart } from "../Redux/ecartSlice";
import Layout from "../Layout/Layout";
import "./CartPage.css";
import Cart from "../components/Card";

const CartPage = () => {
  const products = useSelector(selecteCart);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialQuantities = {};
    products.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }, [products]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [products]);

  return (
    <Layout page={"cart"}>
      {loading ? (
        <div className="spinner"></div>
      ) : products.length === 0 ? (
        <div className="empty-cart-message">
          <h3>Your cart is empty</h3>
          <p>Please add products to your cart</p>
        </div>
      ) : (
        <div className="cont">
          {products.map((item, index) => (
            <Cart
              item={item}
              index={index}
              key={item.id}
              quantities={quantities}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default CartPage;
