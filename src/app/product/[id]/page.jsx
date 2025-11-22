"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const params = useParams(); // get id from URL
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Quantity functions
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Fetch product data
  useEffect(() => {
    const fetchSpecificData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/${params.id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load product");
        setLoading(false);
      }
    };
    fetchSpecificData();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  // Add to Cart function
  const handleAddToCart = async () => {
    const cartData = {
      product: product._id,
      size: 42, // default size, can make dynamic later
      quantity: quantity,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/cart/add", cartData);
      console.log(res.data);
      toast.success("Added to cart successfully!", { position: "top-right", autoClose: 3000 });
    } catch (error) {
      console.error("Failed to add product to cart", error);
      toast.error("Failed to add to cart", { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <>
      <div className="flex max-w-4xl mt-5 mb-5 shadow-2xl rounded-lg mx-auto px-4 py-8 ">
        <div className="flex w-full gap-6">
          {/* Left: Image */}
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-80 h-80 object-cover rounded-md"
            />
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-start w-full">
            <h1 className="text-3xl font-bold text-gray-700">{product.name}</h1>
            <p className="mt-4 text-gray-500">{product.description}</p>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center gap-3">
              <h3 className="text-gray-600">Quantity :</h3>
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-800"
              >
                -
              </button>
              <span className="text-gray-700 font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-700 text-white rounded-md hover:bg-gray-800"
              >
                +
              </button>
            </div>

            {/* Rating */}
            <h3 className="mt-4 text-gray-600">Rating :</h3>
            <div className="text-yellow-400">
              {"★".repeat(product.rating) + "☆".repeat(5 - product.rating)}
            </div>

            {/* Price and Add to Cart Button Side by Side */}
            <div className="mt-4 flex items-center gap-4">
              <p className="font-semibold text-xl text-gray-700">${product.price}</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 ml-74 rounded-md hover:bg-blue-800"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <ToastContainer />
    </>
  );
};

export default Page;
