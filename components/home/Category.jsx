"use client";

import {
  Gamepad2,
  Puzzle,
  Shirt,
  ShoppingBasket,
  Sofa,
  Watch,
} from "lucide-react";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const categoryConfigs = {
  gaming: { icon: Gamepad2, color: "from-purple-500 to-indigo-500" },
  clothing: { icon: Shirt, color: "from-pink-500 to-rose-500" },
  watches: { icon: Watch, color: "from-amber-500 to-orange-500" },
  groceries: { icon: ShoppingBasket, color: "from-green-500 to-emerald-500" },
  furniture: { icon: Sofa, color: "from-blue-500 to-cyan-500" },
};
const Category = () => {
  const { categories } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setLoading(false);
    }
  }, [categories]);

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const { icon: CategoryIcon, color } =
              categoryConfigs[category.name] || {};
            const Icon = CategoryIcon || Puzzle;

            return (
              <Link
                key={category.$id}
                href={`/shop`}
                className="group relative bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors capitalize">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.product.length} items
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-colors duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
