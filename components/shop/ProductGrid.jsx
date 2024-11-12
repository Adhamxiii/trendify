import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products, onQuickView }) => {
  return (
    <>
      {products.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-400">No products found.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.$id}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </>
  );
};
