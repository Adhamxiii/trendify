"use client";

import {
  ChevronDown,
  Gamepad2,
  LayoutGrid,
  Shirt,
  ShoppingBasket,
  Sofa,
  Sparkles,
  Watch,
} from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const categoryConfigs = {
  gaming: {
    icon: Gamepad2,
    color: "text-indigo-500",
    description: "Explore the latest gaming consoles and accessories",
  },
  clothing: {
    icon: Shirt,
    color: "text-indigo-600",
    description: "Explore our collection of stylish clothing",
  },
  watches: {
    icon: Watch,
    color: "text-blue-600",
    description: "Luxury and casual timepieces",
  },
  groceries: {
    icon: ShoppingBasket,
    color: "text-green-600",
    description: "Fresh and packaged food items",
  },
  furniture: {
    icon: Sofa,
    color: "text-cyan-500",
    description: "Comfortable and stylish furniture for your home",
  },
};

export const CategoryDropdown = () => {
  const { categories } = useContext(ShopContext);

  const newArrivals = {
    name: "New Arrivals",
    description: "Check out our latest collection of trending items",
    icon: Sparkles,
    color: "w-5 h-5 text-purple-600",
    key: "new-arrivals",
  };

  const enrichedCategories = [
    newArrivals,
    ...categories.map((category) => {
      const config = categoryConfigs[category.name];
      return {
        ...category,
        icon: config?.icon || category.icon,
        color: config?.color || "text-gray-500",
        description: config?.description || category.description,
      };
    }),
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
        <LayoutGrid className="w-4 h-4" />
        <span className="font-medium">Categories</span>
        <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
      </button>

      <div className="absolute left-0 top-full mt-1 w-[600px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 grid grid-cols-2 gap-4">
          {enrichedCategories.map((category, index) => (
            <Link
              key={category.name}
              href={`/shop`}
              className={`p-4 rounded-lg hover:bg-gray-50 transition-colors  ${
                index === 0 &&
                "row-span-3 bg-[url('/home-bg2.png')] bg-cover bg-center bg-no-repeat flex items-end"
              }`}
            >
              <div className="flex items-start space-x-3 group/item">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover/item:scale-110 transition-transform">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover/item:text-purple-600 transition-colors capitalize">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
