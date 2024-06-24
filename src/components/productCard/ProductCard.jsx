import { toggleFavorite } from "@/store/slice/productsSliceReducer";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductCard = ({ id }) => {
  const product = useSelector((state) => state.products.products[id]);

  const dispatch = useDispatch();

  const handleFavorite = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

    // Проверяем, есть ли уже этот продукт в избранных
    const index = favorite.indexOf(id);
    if (index === -1) {
      // Если нет, добавляем
      favorite.push(id);
    } else {
      // Если да, удаляем
      favorite.splice(index, 1);
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
    dispatch(toggleFavorite(id));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
      <div className="relative">
        <img
          src={product.isFavorite ? "/img/heartred.png" : "/img/heart.png"}
          className="absolute top-2 left-2 w-6 h-6 cursor-pointer"
          onClick={handleFavorite}
        />
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between items-center">
        <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
          {product.title}
        </h3>
        <p className="mt-2 text-lg text-gray-600 text-center">
          ${product.price}
        </p>
      </div>
      <Link href={`/products/${product._id}`} passHref>
        <div className="mt-4 text-[rgb(64,156,255)] hover:underline cursor-pointer text-center">
          Show details
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
