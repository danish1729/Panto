import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Rating from "@mui/material/Rating";
import { LuPlus } from "react-icons/lu";
import SwiperPrev from "./SwiperPrev";
import { Link } from "react-router-dom";

import products from "../products";
import { HiArrowLongRight } from "react-icons/hi2";
import SwiperNext from "./SwiperNext";

const ProductsSlider = ({ addToCart }) => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const [activeCategory, setActiveCategory] = React.useState("chair");

  // Find product by id
  const findProduct = (id) => {
    return products.find((product) => product.id === id);
  };

  // Add selected product to cart state
  const handleAddToCart = (id) => {
    const selectedProduct = findProduct(id);
    if (selectedProduct) {
      addToCart(selectedProduct);
    }
  };

  return (
    <div className="w-full px-4 py-8 sm:px-8 md:px-12 lg:px-[96px] bg-[#F7F7F7] relative">
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold font-gilroy text-[#1E1E1E] capitalize mb-8 text-center">
        Best Selling Product
      </h2>

      {/* Category filter */}
      <div className="flex flex-wrap p-2 sm:p-[6px] bg-[#EEEEEE] rounded-full w-max mx-auto mb-8 sm:mb-[50px] gap-2">
        {["chair", "Beds", "sofa", "lamps"].map((category) => (
          <button
            key={category}
            className={`text-sm sm:text-base md:text-[18px] font-medium capitalize py-2 px-4 sm:py-[12px] sm:px-[24px] rounded-full transition-all duration-300 ${
              activeCategory === category
                ? "bg-white text-[#1E1E1E]"
                : "bg-transparent text-[#1E1E1E]"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Swiper Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-between z-10 pointer-events-none px-4 md:px-8">
        <div ref={prevRef} className="pointer-events-auto hidden md:block">
          <SwiperPrev />
        </div>
        <div ref={nextRef} className="pointer-events-auto hidden md:block">
          <SwiperNext />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 42,
          },
        }}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {products
          .filter((product) => product.category === activeCategory)
          .map((product) => (
            <SwiperSlide key={product.id}>
              <div className="max-w-xs mx-auto flex flex-col justify-center items-center cursor-pointer">
                <div className="bg-[#fafafa] w-full h-[240px] rounded-t-lg overflow-hidden relative flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white w-full rounded-b-lg p-4 flex flex-col mt-2">
                  <p className="text-sm font-inter text-[#8d8d8d]">
                    {product.category}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg sm:text-xl font-semibold font-inter truncate mt-1 mb-1">
                      {product.name}
                    </h3>
                    <Rating
                      name="product-rating"
                      value={product.rating}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                  </Link>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-base font-semibold font-inter text-[#0D1b39]">
                      <sup className="text-xs font-medium mr-1">$</sup>
                      {product.price}
                    </span>
                    <LuPlus
                      className="w-8 h-8 bg-[#0D1B39] text-white rounded-full p-1"
                      onClick={() => handleAddToCart(product.id)}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Link to={"/shop"}>
        <p className="text-base sm:text-[18px] font-medium font-gilroy text-[#E58411] leading-[185%] flex items-center justify-center gap-2 cursor-pointer mt-12 mx-auto w-max">
          View All <HiArrowLongRight />
        </p>
      </Link>
    </div>
  );
};

export default ProductsSlider;
