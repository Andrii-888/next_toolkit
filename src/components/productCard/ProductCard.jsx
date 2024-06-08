import React from "react";
import { useSelector } from "react-redux";

const ProductCard = ({ id }) => {
  const product = useSelector((state) => state.products.products[id]);
  console.log(product);
  return <div></div>;
};

export default ProductCard;
