"use client";
import React from "react";
import { useAppSelector } from "@/store/hooks";
import ProductCard from "../productCard";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Favorites = () => {
  const { t } = useTranslation();
  const favoriteProducts = useAppSelector((state) => state.products.favorites);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-semibold text-center text-gray-800">
            Favorites
          </h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Add to cart
          </button>
        </div>
        <div>
          {!favoriteProducts.length && (
            <p className="text-gray-700 text-lg">No favorite products found.</p>
          )}

          {favoriteProducts.length > 0 && (
            <ul className="grid grid-cols-4 gap-7 items-stretch">
              {favoriteProducts.map((item) => (
                <ProductCard key={item._id} id={item._id} />
              ))}
            </ul>
          )}
        </div>
        <p className="mt-4 text-sm text-center text-gray-600">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700">
            {t("Continue Shopping")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Favorites;

// favoriteProducts.map((product) => (
//   <div key={product.id} className="bg-white p-4 rounded shadow-sm">
//     <Link href={`/product/${product.id}`}>
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded"
//       />
//       <h2 className="mt-2 text-xl font-semibold text-gray-800">
//         {product.name}
//       </h2>
//     </Link>
//   </div>
// ))}
