import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { selecteProduct } from "../Redux/ecartSlice";
import { useSelector } from "react-redux";
import Product from "../components/Product";

const Products = () => {
  const products = useSelector(selecteProduct);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [products]);
  return (
    <Layout>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="container1">
          {products.map((item, index) => (
            <Product key={index} data={item} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Products;
