import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Rating from "@mui/material/Rating";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

import products from "../products";

const RelatedProductsSlider = ({ category, addToCart }) => {
  const relatedProducts = products.filter(
    (product) => product.category === category
  );

  // Add to cart handler
  const handleAddToCart = (id) => {
    const selectedProduct = products.find((p) => p.id === id);
    if (selectedProduct) {
      addToCart(selectedProduct);
    }
  };

  return (
    <div className="w-full px-4 py-8 sm:px-8 md:px-12 lg:px-24">
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold font-gilroy text-[#1E1E1E] capitalize mb-8 text-center">
        Related Products
      </h2>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
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
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="max-w-xs mx-auto flex flex-col justify-center items-center cursor-pointer">
              <div className="bg-[#fafafa] w-full h-[240px] rounded-t-lg overflow-hidden relative flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="bg-[#f7f7f7] w-full rounded-b-lg p-4 flex flex-col mt-2">
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
                    className="w-8 h-8 bg-[#0D1B39] text-white rounded-full p-1 cursor-pointer"
                    onClick={() => handleAddToCart(product.id)}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProductsSlider;
