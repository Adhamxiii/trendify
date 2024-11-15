"use client";

import dynamic from "next/dynamic";
const Brands = dynamic(() => import("@/components/home/Brands"), {
  ssr: false,
  loading: () => (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      </div>
    </section>
  ),
});
const Category = dynamic(() => import("@/components/home/Category"), {
  ssr: false,
});
const DealSwiper = dynamic(() => import("@/components/home/DealSwiper"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/home/Hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Category />
      <DealSwiper />
      <Brands />
    </div>
  );
}
