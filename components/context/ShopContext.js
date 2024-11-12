"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { Permission, Query, Role } from "appwrite";
import { database } from "@/lib/appwrite";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 1000],
    onSale: false,
    inStock: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const productsPerPage = 12;

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const queries = [Query.limit(100)];

      if (searchTerm) {
        queries.push(Query.search("name", searchTerm));
      }

      if (filters.category && filters.category.length > 0) {
        queries.push(Query.equal("category", filters.category));
      }

      queries.push(Query.greaterThanEqual("price", filters.priceRange[0]));
      queries.push(Query.lessThanEqual("price", filters.priceRange[1]));

      if (filters.onSale) {
        queries.push(Query.equal("type", "sale"));
      }

      if (filters.inStock) {
        queries.push(Query.greaterThan("stock", 0));
      }

      switch (sortBy) {
        case "price-low":
          queries.push(Query.orderAsc("price"));
          break;
        case "price-high":
          queries.push(Query.orderDesc("price"));
          break;
        case "newest":
          queries.push(Query.orderDesc("$createdAt"));
          break;
      }

      const response = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_PRODUCT_COLLECTION_ID,
        queries,
        [Permission.read(Role.any())]
      );
      setProducts(response.documents);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, filters, sortBy]);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await database.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_CATEGORY_COLLECTION_ID
      );
      setCategories(response.documents);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFilter = useCallback(() => {
    setIsFilterOpen((prev) => !prev);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const contextValue = useMemo(
    () => ({
      isFilterOpen,
      isCartOpen,
      quickViewProduct,
      sortBy,
      currentPage,
      filters,
      searchTerm,
      products,
      categories,
      loading,
      productsPerPage,
      totalPages,
      currentProducts,
      toggleFilter,
      toggleCart,
      openQuickView,
      closeQuickView,
      handleFilterChange,
      handleSortChange,
      handlePageChange,
      handleSearch,
      fetchProducts,
    }),
    [
      isFilterOpen,
      isCartOpen,
      quickViewProduct,
      sortBy,
      currentPage,
      filters,
      searchTerm,
      products,
      categories,
      loading,
      totalPages,
      currentProducts,
      toggleFilter,
      toggleCart,
      fetchProducts,
    ]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
