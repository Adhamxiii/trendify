import { Inter } from "next/font/google";
import "../global.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/components/context/AuthContext";
import { ShopProvider } from "@/components/context/ShopContext";

import { OrdersProvider } from "@/components/context/OrderContext";
import { CartProvider } from "@/components/context/CartContext";

const inter = Inter({
  weight: ["100", "400", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Trendify - Modern E-Commerce",
  description: "Trendify is a modern e-commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <AuthProvider>
          <CartProvider>
            <OrdersProvider>
              <ShopProvider>
                <Header />
                {children}
                <Footer />
              </ShopProvider>
            </OrdersProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
