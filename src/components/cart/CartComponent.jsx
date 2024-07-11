"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  removeFromCart,
  clearCart,
  updateQuantity,
} from "@/store/slice/productsSliceReducer";
import Link from "next/link";
import dynamic from "next/dynamic";
// import { current } from "@reduxjs/toolkit";

const CartComponent = () => {
  const { t } = useTranslation();
  const cart = useAppSelector((state) => state.products.cart);

  const [sum, setSum] = useState(0);

  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.products);

  const [listOfProducts, setlistOfProducts] = useState([]);
  console.log(listOfProducts);
  useEffect(() => {
    const productInCarts = cart.reduce((acc, current) => {
      const product = products[current.productId];
      if (product) {
        acc.push({
          ...product,
          amount: current.amount,
          quantity: current.quantity,
        });
      }
      return acc;
    }, []);
    const totalPrice = productInCarts.reduce(
      (total, item) => total + item.amount,
      0
    );

    setSum(totalPrice);
    setlistOfProducts(productInCarts);
  }, [cart, products]);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newCount) => {
    if (newCount > 0) {
      dispatch(updateQuantity({ id, count: newCount }));
    }
  };

  const handleCheckout = () => {
    if (router) {
      router.push("/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          {t("Cart")}
        </h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">{t("Your cart is empty")}</p>
        ) : (
          <>
            <ul>
              {listOfProducts.map((item) => (
                <li
                  key={`${item._id}1`}
                  className="flex justify-between items-center py-4 border-b border-gray-300"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-lg font-medium text-gray-800">
                        {item.name}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity - 1)
                          }
                          className="text-gray-600 hover:text-gray-800"
                        >
                          -
                        </button>
                        <p className="text-sm text-gray-600">
                          {t("Quantity")}: {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity + 1)
                          }
                          className="text-gray-600 hover:text-gray-800"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    ${item.price}
                  </div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    {t("Remove")}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => dispatch(clearCart())}
                className="text-sm text-red-600 hover:text-red-800"
              >
                {t("Clear Cart")}
              </button>
              <div className="text-xl font-semibold text-gray-800">
                {t("Total")}: ${sum}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCheckout}
                className="px-6 py-3 bg-indigo-600 text-white text-lg rounded-md shadow-md hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {t("Checkout")}
              </button>
            </div>
          </>
        )}
        <p className="mt-4 text-sm text-center text-gray-600">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700">
            {t("Continue Shopping")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CartComponent), {
  ssr: false,
});
