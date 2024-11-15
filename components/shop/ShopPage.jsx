"use client";

import React, { useContext, useEffect, useRef } from "react";
import { ShopHeader } from "./ShopHeader";
import { ProductGrid } from "./ProductGrid";
import { FilterSidebar } from "./FilterSidebar";
import { CartPreview } from "./CartPreview";
import { QuickView } from "./QuickView";
import { Pagination } from "./Pagination";
import { ShopContext } from "../context/ShopContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShopPage = () => {
  const {
    isFilterOpen,
    isCartOpen,
    quickViewProduct,
    sortBy,
    currentPage,
    filters,
    searchTerm,
    products,
    loading,
    currentProducts,
    totalPages,
    toggleFilter,
    toggleCart,
    openQuickView,
    closeQuickView,
    handleFilterChange,
    handleSortChange,
    handlePageChange,
    handleSearch,
    fetchProducts,
    categories,
  } = useContext(ShopContext);

  const containerRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".shop-header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".filter-sidebar", {
        x: -300,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".filter-sidebar",
          start: "top center+=100",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".pagination", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pagination",
          start: "top center",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-[160px]" ref={containerRef}>
      <div className="shop-header">
        <ShopHeader
          productCount={products.length}
          onFilterToggle={toggleFilter}
          onCartToggle={toggleCart}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          searchTerm={searchTerm}
          onSearch={handleSearch}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="filter-sidebar z-40">
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={toggleFilter}
              filters={filters}
              onFilterChange={handleFilterChange}
              categories={categories}
            />
          </div>

          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : (
              <>
                <ProductGrid
                  products={currentProducts}
                  onQuickView={openQuickView}
                />

                <div className="pagination">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <CartPreview isOpen={isCartOpen} onClose={toggleCart} />

      {quickViewProduct && (
        <QuickView product={quickViewProduct} onClose={closeQuickView} />
      )}
    </div>
  );
};

export default ShopPage;
