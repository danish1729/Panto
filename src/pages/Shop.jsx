import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import { useCart } from "../components/context/CartContext";
import Products from "../products";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import { FaFilter, FaTimes } from "react-icons/fa";

const products = Products;

const Shop = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category");
  const categories = [...new Set(products.map((p) => p.category))];

  const [selectedCategories, setSelectedCategories] = useState(
    categoryFromUrl ? [categoryFromUrl] : []
  );
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    } else {
      setSelectedCategories([]);
    }
  }, [categoryFromUrl]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handlePriceChange = (_, newValue) => {
    setPriceRange(newValue);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1500]);
    setIsSidebarOpen(false); // Close sidebar on clear
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const inCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const inPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return inCategory && inPrice;
    });
  }, [selectedCategories, priceRange]);

  return (
    <>
      <Navbar BackgroundColor="#1e1e1e" />
      <div className="bg-[#F7F7F7] min-h-screen pt-20">
        <h2 className="text-3xl font-bold pt-8 text-center font-gilroy">
          Shop
        </h2>

        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 gap-8 md:gap-10">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden w-full py-3 px-4 bg-[#E58411] text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition hover:bg-[#cf730c]"
          >
            <FaFilter />
            {isSidebarOpen ? "Close Filters" : "Show Filters"}
          </button>

          {/* Sidebar - Conditional Rendering & Animation */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                onClick={() => setIsSidebarOpen(false)}
              >
                <motion.aside
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.3 }}
                  className="w-64 bg-white shadow-lg p-6 h-full overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold font-gilroy">Filters</h3>
                    <button onClick={() => setIsSidebarOpen(false)}>
                      <FaTimes className="text-gray-500" />
                    </button>
                  </div>
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 font-gilroy">
                      Categories
                    </h4>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <motion.label
                          key={cat}
                          className="flex items-center gap-2 cursor-pointer font-gilroy"
                          whileHover={{ scale: 1.02 }}
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="accent-[#E58411]"
                          />
                          <span className="font-gilroy">{cat}</span>
                        </motion.label>
                      ))}
                    </div>
                  </div>
                  {/* Price Filter */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-4 font-gilroy">
                      Price Range
                    </h4>
                    <Slider
                      value={priceRange}
                      onChange={handlePriceChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={1500}
                      sx={{ color: "#E58411" }}
                    />
                    <p className="text-sm mt-2 font-gilroy">
                      ${priceRange[0]} – ${priceRange[1]}
                    </p>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="w-full py-2 bg-[#E58411] text-white rounded-lg hover:bg-[#cf730c] transition font-gilroy font-semibold"
                  >
                    Clear Filters
                  </button>
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 bg-white shadow-lg rounded-2xl p-6 h-fit">
            <h3 className="text-xl font-bold mb-6 font-gilroy">Filters</h3>
            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2 font-gilroy">Categories</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <motion.label
                    key={cat}
                    className="flex items-center gap-2 cursor-pointer font-gilroy"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#E58411]"
                    />
                    <span className="font-gilroy">{cat}</span>
                  </motion.label>
                ))}
              </div>
            </div>
            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-4 font-gilroy">Price Range</h4>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={1500}
                sx={{ color: "#E58411" }}
              />
              <p className="text-sm mt-2 font-gilroy">
                ${priceRange[0]} – ${priceRange[1]}
              </p>
            </div>
            <button
              onClick={clearFilters}
              className="w-full py-2 bg-[#E58411] text-white rounded-lg hover:bg-[#cf730c] transition font-gilroy font-semibold"
            >
              Clear Filters
            </button>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="wait">
                {filteredProducts.map((product) => (
                  <Link to={`/product/${product.id}`}>
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col justify-center items-center cursor-pointer"
                    >
                      <div className="bg-[#fafafa] w-full h-[240px] rounded-t-lg overflow-hidden relative flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-contain w-full h-full p-4"
                        />
                      </div>
                      <div className="bg-white w-full rounded-b-lg p-4 flex flex-col">
                        <p className="text-sm font-inter text-[#8d8d8d] font-gilroy">
                          {product.category}
                        </p>

                        <h3 className="text-lg font-semibold font-inter truncate mt-1 mb-1 font-gilroy">
                          {product.name}
                        </h3>
                        <Rating
                          name="product-rating"
                          value={product.rating}
                          precision={0.5}
                          size="small"
                          readOnly
                        />

                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-base font-semibold font-inter text-[#0D1b39] font-gilroy">
                            <sup className="text-sm font-medium mr-1 font-gilroy">
                              $
                            </sup>
                            {product.price}
                          </span>
                          <LuPlus
                            className="w-8 h-8 bg-[#0D1B39] text-white rounded-full p-1 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(product)}}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center text-gray-500 mt-12">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
