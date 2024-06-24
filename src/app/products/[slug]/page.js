import Header from "@/components/header";
import ProductDetails from "@/components/productDetails";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <ProductDetails />
      </main>
    </div>
  );
};

export default page;
