"use client";
import { fetchProducts } from "@/store/slice/fetchSliceProductAsync";
import React, { useEffect } from "react";
import ProductCard from "../productCard";
import Loader from "../loader";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) =>
    Object.values(state.products.products)
  );
  const isLoader = useAppSelector((state) => state.products.loading);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify([]));
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoader) {
    return <Loader />;
  }
  
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
