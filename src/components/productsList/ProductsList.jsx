"use client";
import { fetchProduct } from "@/store/slice/fetchSliceProductAsync";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../productCard";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) =>
    Object.values(state.products.products)
  );
  console.log(products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <ul className="grid grid-cols-4 grid-row[auto] gap-7 items-stretch">
        {products.map((item) => (
          <ProductCard key={item.id} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;

