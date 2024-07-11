// "use client";
// import { addToCart, toggleFavorite } from "@/store/slice/productsSliceReducer";
// import Link from "next/link";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { fetchAddToCart } from "@/store/slice/fetchSliceCartAsync";

// const ProductCard = ({ id }) => {
//   const product = useAppSelector((state) => state.products.products[id]);
//   const dispatch = useAppDispatch();

//   const handleFavorite = () => {
//     dispatch(toggleFavorite(id));
//     // setFavoriteClicked(true);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     // dispatch(addToCart(id));
//     dispatch(
//       fetchAddToCart({ productId: id, quantity: 1, amount: product.price })
//     );
//   };

//   return (
//     <li className="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
//       <div className="relative">
//         <img
//           src={product.isFavorite ? "/img/heartred.png" : "/img/heart.png"}
//           className="absolute top-2 left-2 w-6 h-6 cursor-pointer"
//           onClick={handleFavorite}
//         />
//         <Link href={`/products/${product._id}`} passHref>
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
//           />
//         </Link>
//       </div>
//       <div className="flex-grow flex flex-col justify-between items-center">
//         <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
//           {product.title}
//         </h3>
//         <p className="mt-2 text-lg text-gray-600 text-center">
//           ${product.price}
//         </p>
//       </div>
//       <Link href={`/products/${product._id}`} passHref>
//         <div className="mt-4 text-[rgb(64,156,255)] hover:underline cursor-pointer text-center">
//           Show details
//         </div>
//       </Link>
//       <form>
//         {" "}
//         <button type="submit" onClick={handleClick}>
//           Add to cart
//         </button>
//       </form>
//     </li>
//   );
// };

// export default ProductCard;

"use client";
import { toggleFavorite } from "@/store/slice/productsSliceReducer";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAddToCart } from "@/store/slice/fetchSliceCartAsync";

const ProductCard = ({ id }) => {
  const product = useAppSelector((state) => state.products.products[id]);
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      fetchAddToCart({ productId: id, quantity: 1, amount: product.price })
    );
  };

  return (
    <li className="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
      <div className="relative">
        <img
          src={product.isFavorite ? "/img/heartred.png" : "/img/heart.png"}
          className="absolute top-2 left-2 w-6 h-6 cursor-pointer"
          onClick={handleFavorite}
        />
        <Link href={`/products/${product._id}`} passHref>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
          />
        </Link>
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
      <button
        type="button"
        onClick={handleClick}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add to cart
      </button>
    </li>
  );
};

export default ProductCard;
