import { X } from "lucide-react";

export const FilterSidebar = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  categories,
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 lg:relative lg:transform-none lg:w-64 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="h-full overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.name} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    checked={filters.category === category.$id}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onFilterChange({ ...filters, category: category.$id });
                      }
                    }}
                  />
                  <span className="ml-2 text-sm text-gray-600 capitalize">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Price Range
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    onFilterChange({
                      ...filters,
                      priceRange: [
                        Number(e.target.value),
                        filters.priceRange[1],
                      ],
                    })
                  }
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Min"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    onFilterChange({
                      ...filters,
                      priceRange: [
                        filters.priceRange[0],
                        Number(e.target.value),
                      ],
                    })
                  }
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Other Filters
            </h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  checked={filters.onSale}
                  onChange={(e) =>
                    onFilterChange({ ...filters, onSale: e.target.checked })
                  }
                />
                <span className="ml-2 text-sm text-gray-600">On Sale</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  checked={filters.inStock}
                  onChange={(e) =>
                    onFilterChange({ ...filters, inStock: e.target.checked })
                  }
                />
                <span className="ml-2 text-sm text-gray-600">In Stock</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
