"use client";
import { account } from "@/lib/appwrite";
import {
  Gamepad2,
  LayoutGrid,
  LogOut,
  Menu,
  Plus,
  Search,
  Shirt,
  ShoppingBasket,
  ShoppingCart,
  Sofa,
  User,
  Watch,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { ShopContext } from "../context/ShopContext";
import { CartPreview } from "../shop/CartPreview";
import { AdBar } from "./AdBar";
import { CategoryDropdown } from "./CategoryDropdown";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Order", href: "/order" },
  { name: "Contact", href: "/contact" },
];

const categoryConfigs = {
  gaming: { icon: Gamepad2, color: "text-indigo-500" },
  clothing: { icon: Shirt, color: "text-rose-500" },
  watches: { icon: Watch, color: "text-orange-500" },
  groceries: { icon: ShoppingBasket, color: "text-emerald-500" },
  furniture: { icon: Sofa, color: "text-cyan-500" },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const { cartItems } = useCart();

  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const containerRef = useRef(null);
  const userIconRef = useRef(null);

  const { isCartOpen, toggleCart, categories } = useContext(ShopContext);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        userIconRef.current &&
        !userIconRef.current.contains(event.target)
      ) {
        setIsAccountMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getSession = async () => {
      try {
        const session = await account.get();
        setSession(session);
      } catch (error) {
        if (error.message.includes("missing scope")) {
          console.warn("User is not authenticated. Redirecting to login.");
          setSession(null);
          router.push("/register");
        } else {
          console.error("Error fetching session:", error);
        }
      }
    };
    getSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setSession(null);
      setIsAccountMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <AdBar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Trendify
              </h1>
            </div>

            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div
                className={`relative transition-all duration-300 ${
                  searchFocused ? "scale-105" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch(e);
                    }
                  }}
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6 relative">
              {session ? (
                <div
                  ref={userIconRef}
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                  className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors cursor-pointer "
                >
                  <span className="text-sm font-medium text-purple-600 select-none">
                    {session?.name?.[0]}
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => router.push("/register")}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <User className="w-6 h-6" />
                </button>
              )}

              {isAccountMenuOpen && (
                <div
                  ref={containerRef}
                  className="absolute top-6 right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transform scale-95 animate-[scaleIn_0.2s_ease-out_forwards]"
                >
                  {session && (
                    <>
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                          {session?.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {session?.email}
                        </p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors flex items-center"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign out
                      </button>
                    </>
                  )}
                </div>
              )}

              <button
                className="relative text-gray-600 hover:text-purple-600 transition-colors"
                onClick={toggleCart}
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>
            </div>

            <button
              className="z-50 md:hidden text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="hidden md:block border-t border-gray-100">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between space-x-8 h-12">
                <CategoryDropdown />
                <nav className="flex items-center space-x-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out  ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-14 px-4 bg-white min-h-screen">
            <div className="relative mb-6 max-w-[95%]">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <div className="flex items-center space-x-2">
                    <LayoutGrid className="w-5 h-5 text-gray-900" />
                    <h3 className="font-medium text-gray-900">Categories</h3>
                  </div>
                  <Plus
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isCategoriesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`space-y-4 pl-4 transition-all duration-300 ${
                    isCategoriesOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {categories.map((item) => {
                    const { icon, color } = categoryConfigs[item.name];
                    const Icon = icon;

                    return (
                      <Link
                        key={item.$id}
                        href="/shop"
                        className="flex items-center space-x-3 gap-3 text-gray-600 hover:text-purple-600 capitalize"
                      >
                        <Icon className={`${color} w-5 h-5`} />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-purple-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-6 space-y-4">
              {!session ? (
                <Link
                  href="/register"
                  className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors py-2"
                >
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full text-left py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      <CartPreview isOpen={isCartOpen} onClose={() => toggleCart()} />
    </>
  );
};

export default Header;
