"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

// const productsData = [
//   {
//     id: 1,
//     name: "Shoes",
//     price: 499.99,
//     image: "/little-boy-tying-shoe-laces-on-stairs-outdoors-closeup.webp",
//     description:
//       "Comfortable and durable kids’ shoes designed for all-day play, featuring a flexible sole and vibrant colors that kids love.",
//     rating: 4,
//     views: 120,
//   },
//   {
//     id: 2,
//     name: "Jacket",
//     price: 299.99,
//     image: "/caa92e665a450bd77baefe8141c723e715f0a04c.avif",
//     description:
//       "A stylish and durable jacket designed for everyday wear, keeping you warm and looking sharp in all seasons.",
//     rating: 3,
//     views: 85,
//   },
//   {
//     id: 3,
//     name: "Hoodie",
//     price: 599.99,
//     image: "/black-white-hoodies-wooden-background_447653-25981.webp",
//     description:
//       "A cozy and trendy hoodie that’s perfect for casual outings, lounging at home, or layering on chilly days.",
//     rating: 5,
//     views: 200,
//   },
// ];

const Product = () => {
  const [cartMessage, setCartMessage] = useState("");
  const router = useRouter();
  // use an array so .map works
  const [data, setData] = useState([]);

  // Fetch all products when component mounts
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product/");
        // handle different backend shapes: array or { products: [] }
        const products = Array.isArray(res.data)
          ? res.data
          : res.data?.products || [];
        setData(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setCartMessage("Failed to load products");
        setTimeout(() => setCartMessage(""), 3000);
      }
    };

    fetchAllProducts();
  }, []);

  // separate helper to read a single product by id
  const handleReadProduct = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/product/`);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch product:", error);
      setCartMessage("Failed to load product");
      setTimeout(() => setCartMessage(""), 3000);
      return null;  
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cartMessage && (
        <div className="col-span-full text-center text-green-600 font-semibold mb-4">
          {cartMessage}
        </div>
      )}

      {data.map((product) => (
        <Link
          key={product._id || product.id}
          href={`/product/${product._id || product.id}`}
        >
          <div className="rounded-lg p-4 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-1 text-sm">
              {product.description || ""}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-400">
                {(() => {
                  const r = Math.max(
                    0,
                    Math.min(5, Number(product.rating) || 0)
                  );
                  return "★".repeat(r) + "☆".repeat(5 - r);
                })()}
              </span>
              <span className="text-gray-500 text-sm">
                ({product.views || 0} views)
              </span>
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-xl font-bold text-gray-400">
                ${product.price}
              </span>
              <button
              className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-800"
                onClick={() => {
                  router.push(`/product/${product._id || product.id}`);
                }}
              >
                View Product
              </button>
              {/* <button
                className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-800"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
