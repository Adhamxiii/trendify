"use client";

import { Truck, ShieldCheck, RotateCcw, CreditCard } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Start from $10",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Money Guarantee",
    description: "7 Days back",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: RotateCcw,
    title: "365 Days",
    description: "For free return",
    color: "from-orange-600 to-yellow-500",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Secure system",
    color: "from-green-600 to-emerald-500",
  },
];

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Infobar = () => {
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-box", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top center+=100",
        },
      });
    }, infoRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="container mx-auto px-4 ">
      <div
        ref={infoRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="info-box relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-xl p-3 bg-gradient-to-r ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
            <div
              className={`absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${feature.color}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Infobar;
