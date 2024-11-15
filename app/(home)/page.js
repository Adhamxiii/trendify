"use client";

import dynamic from "next/dynamic";
const Brands = dynamic(() => import("@/components/home/Brands"), {
  ssr: false,
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
