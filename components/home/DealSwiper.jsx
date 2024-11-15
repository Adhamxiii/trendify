"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import ProductDetail from "@/data/productsDetails";
import { ShopContext } from "../context/ShopContext";
import { QuickView } from "../shop/QuickView";
import { useCart } from "../context/CartContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const DealSwiper = () => {
  const [deal, setDeal] = useState([]);
  const { products, closeQuickView, quickViewProduct, openQuickView } =
    useContext(ShopContext);
  const { addToCart } = useCart();

  const containerRef = useRef(null);

  useEffect(() => {
    const filterProduct = () => {
      const dealProduct = products.filter((product) => product.deal === true);
      const repeatedDeal = Array.from({ length: 10 }, () => dealProduct).flat();

      setDeal(repeatedDeal);
    };
    filterProduct();
  }, [products]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      timeline.from(".deal-card", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="py-5 px-[30px]" ref={containerRef}>
        <h3 className="text-2xl font-bold text-gray-900">Deals of the day</h3>
        <div className="flex justify-center p-5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="deal-swiper"
          >
            {deal.map((product, i) => (
              <SwiperSlide key={i}>
                <div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="deal-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative group">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={product?.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      {product.type && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 uppercase">
                          {product.type}
                        </span>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button
                        onClick={() => openQuickView(product)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Eye className="w-5 h-5 text-gray-600" />
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-purple-600">
                        ${product.price}
                      </p>
                      <span className="text-sm text-gray-500 capitalize">
                        {product.category.name}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {quickViewProduct && (
        <QuickView product={quickViewProduct} onClose={closeQuickView} />
      )}
    </>
  );
};

export default DealSwiper;
