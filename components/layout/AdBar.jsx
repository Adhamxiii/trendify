'use client'

import React, { useEffect, useState } from "react";
import { Truck, Clock, Shield, Gift, ArrowRight } from "lucide-react";

export const AdBar = () => {
  const [currentInfo, setCurrentInfo] = useState(0);
  const infoItems = [
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Free Express Shipping",
      description: "On orders over $99",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Customer Support",
      description: "Get help anytime",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Money-Back Guarantee",
      description: "30-day free returns",
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Special Offers",
      description: "Save up to 50%",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInfo((prev) => (prev + 1) % infoItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [infoItems.length]);

  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-200 animate-gradient-x">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-12 flex items-center justify-center">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
                index === currentInfo
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center space-x-2 text-white">
                {item.icon}
                <span className="font-medium">{item.title}</span>
                <span className="hidden sm:inline text-purple-200">•</span>
                <span className="hidden sm:inline text-purple-100">
                  {item.description}
                </span>
                <ArrowRight className="w-4 h-4 ml-2 animate-bounce-x" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
