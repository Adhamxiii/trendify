"use client";

import React from "react";
import { Eye, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button
            onClick={() => onQuickView(product)}
            className="p-3 bg-white rounded-full text-gray-600 hover:text-purple-600 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => addToCart(product)}
            className="p-3 bg-white rounded-full text-gray-600 hover:text-purple-600 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white rounded-full text-gray-600 hover:text-purple-600 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {product.type === "sale" && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )}
        {product.type === "new" && (
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            {product.type === "sale" && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${Math.round(product.price * 1.2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
