"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProductById } from "@/store/slice/fetchSliceProductAsync";
import Stars from "../stars";
import Loader from "@/components/loader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const productSize = useAppSelector((state) => state.products.product);
  console.log(productSize);
  const isLoading = useAppSelector((state) => state.products.loading);

  // const productSize = {
  //   title:
  //     "Eddie Bauer Home Sheets Cotton Percale Bedding Set, Crisp & Cool, Stylish Home Decor, 4 Pieces, Queen, Ticking Stripe Light Blue/Denim Blue",
  //   description: [
  //     "100% Cotton",
  //     "MATERIAL: 100% Cotton Percale Construction- with a crisp and cool feel",
  //     "INCLUDES: Queen sheet set includes flat sheet, fitted sheet and 2 standard pillow cases",
  //     "FEATURES: Single Ply Sheet- perfect for sensitive skin; more breathable and will stand up to repeat washes; Tightly woven for a super smooth hand; woven to be lightweight",
  //     'DIMENSIONS: Queen set measures: Flat sheet- 102"L x 90"W, Fitted sheet- 80"L x 60"W; Standard pillowcases 20"L x 30"W',
  //     "CARE: Easy care: machine washable",
  //   ],
  //   rating: { rate: 4.3, feedBackCount: 300 },
  //   material: "cotton",
  //   category: "homeTextile",
  //   sizes: {
  //     single: {
  //       size: "single",
  //       title: "Single",
  //       price: "130",
  //       color: ["white", "blue", "grey"],
  //       availability: 2,
  //     },
  //     double: {
  //       size: "double",
  //       title: "Double",
  //       price: "150",
  //       color: ["white", "blue", "grey"],
  //       availability: 0,
  //     },
  //   },
  // };

  const [size, setSize] = useState("double");
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(slug));
  }, [slug]);

  useEffect(() => {
    setSize();
  }, [productSize]);

  if (isLoading) {
    return <Loader />;
  }

  const sizeConfig = [
    {
      title: "single",
    },
    {
      title: "double",
    },
  ];
  // const obj = {
  //   name: "Tdip",
  //   numer: 33,
  //   status: "colorRed",
  // };

  // const handle = (obj) => ({
  //   numer: obj.numer,
  //   status: obj.status,
  // });
  // const handlLA = ({ name, ...rest }) => rest;
  return (
    <div className="mx-auto my-0 max-w-5xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="max-w-[400px] w-full md:col-span-1">
          {productSize.image?.map((item, index) => (
            <Zoom key={index}>
              <img
                width={400}
                height={500}
                src={item}
                alt="Product"
                className="rounded-md shadow-md max-w-[400px] w-full"
              />
            </Zoom>
          ))}
        </div>

        <div className="flex flex-col gap-3 md:col-span-2">
          <h2 className="text-3xl font-semibold text-gray-800">
            {productSize.title}
          </h2>

          <p className="text-xl font-medium text-gray-700">
            Price: <img src="/img/euro.png" className="inline w-4 h-4 mb-1" />
            {productSize.sizes && productSize?.sizes[size]?.price}
          </p>

          <div className="mt-4">
            <p className="text-lg font-medium text-gray-700">Size:</p>
            <ul className="flex gap-2 mt-2">
              {sizeConfig.map((item) => (
                <li
                  key={item.title}
                  className={`px-4 py-2 border rounded-md cursor-pointer ${
                    size === item.title
                      ? "border-blue-500 text-blue-500"
                      : "border-gray-300 text-gray-700"
                  }`}
                  onClick={() => setSize(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-lg font-medium text-gray-700">
              About this item:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {productSize.description &&
                productSize.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
            </ul>
          </div>

          <p className="text-lg font-medium text-gray-700 mt-4">
            Category:{" "}
            <span className="text-gray-600">{productSize.category}</span>
          </p>

          <div className="flex items-center gap-4">
            <p className="text-lg font-medium text-gray-700">Rating:</p>
            <Stars
              rating={productSize.rating?.rate}
              onRatingChange={ratingChanged}
            />
            <p className="text-gray-600">
              {productSize.rating?.feedBackCount} reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
