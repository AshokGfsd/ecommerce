import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCategory,
  setPriceRange,
  setSortOrders,
  filterProducts,
} from "../Redux/ecartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const categories = ["all", "smartphones", "accessories", "laptops"]; // List your categories here
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    dispatch(setCategory(e.target.value));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    dispatch(setSortOrders(e.target.value));
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    dispatch(setPriceRange({ min: minPrice, max: maxPrice }));
    dispatch(filterProducts());
  };

  return (
    <header className="show">
      <div className="container-fluid bg-light py-3">
        <div className="row align-items-center">
          {/* Responsive Toggle Button */}
          <div className="col-12 d-lg-none mb-3">
            <button
              className="btn btn-outline-primary w-100"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#filterBar"
              aria-expanded="false"
              aria-controls="filterBar"
            >
              Filters
            </button>
          </div>

          {/* Filter Bar */}
          <div className="collapse d-lg-flex" id="filterBar">
            <div className="row w-100 align-items-center">
              {/* Category Filter */}
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  aria-label="Select Category"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="col-12 col-md-5 mb-3 mb-md-0">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="input-group">
                      <label className="input-group-text">Min</label>
                      <input
                        type="number"
                        name="minPrice"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="form-control"
                        min="0"
                        aria-label="Min Price"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group">
                      <label className="input-group-text">Max</label>
                      <input
                        type="number"
                        name="maxPrice"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="form-control"
                        min="0"
                        aria-label="Max Price"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sort Order */}
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <select
                  className="form-select"
                  value={sortOrder}
                  onChange={handleSortChange}
                  aria-label="Sort By"
                >
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* Apply Filters Button */}
              <div className="col-12 col-md-1 text-center text-md-end">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleApplyFilters}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
