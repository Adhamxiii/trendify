"use client";

import dynamic from "next/dynamic";

const ShopPage = dynamic(() => import("@/components/shop/ShopPage"), {
  ssr: false,
});

const page = () => {
  return <ShopPage />;
};

export default page;
