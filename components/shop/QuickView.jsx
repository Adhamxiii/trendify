'use client'

import { Heart, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export const QuickView = ({ product, onClose }) => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex h-full">
            <div className="w-1/2 relative bg-gray-100">
              <Image
                src={product?.imageUrl}
                alt={product?.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              {product?.type === "sale" && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </span>
              )}
            </div>

            <div className="w-1/2 p-8 overflow-y-auto">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {product?.name}
                  </h2>
                  <p className="mt-2 text-gray-500">{product?.description}</p>
                </div>

                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product?.price}
                  </span>
                  {product?.type === "sale" && (
                    <span className="text-lg text-gray-500 line-through">
                      ${Math.round(product?.price * 1.2)}
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="p-3 border border-gray-300 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    Product Details
                  </h3>
                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-gray-500">
                      Category: {product?.category.name}
                    </p>
                    {product.type && (
                      <p className="text-sm text-gray-500">
                        Type: {product?.type}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
