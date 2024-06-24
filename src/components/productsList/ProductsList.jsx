"use client";
import { fetchProducts } from "@/store/slice/fetchSliceProductAsync";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../productCard";
import Loader from "../loader";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    Object.values(state.products.products)
  );
  const isLoader = useSelector((state) => state.products.loading);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify([]));
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoader) {
    return <Loader />;
  }
  console.log(products, 555);
  return (
    <div>
      <ul className="grid grid-cols-4 grid-row[auto] gap-7 items-stretch">
        {products.map((item) => (
          <ProductCard key={item._id} id={item._id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
