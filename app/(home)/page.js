import Brands from "@/components/home/Brands";
import Category from "@/components/home/Category";
import DealSwiper from "@/components/home/DealSwiper";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <DealSwiper />
      <Brands />
    </div>
  );
}
