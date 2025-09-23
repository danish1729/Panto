import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Rating from "@mui/material/Rating";
import Testimonials from "../testimonials.js";


const testimonials = Testimonials;

const TestimonialSlider = () => {

  return (
    <div className="py-12 md:py-24 px-4 sm:px-8 md:px-[80px]">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm sm:text-base uppercase tracking-[3px] text-[#E58411] font-gilroy font-semibold mb-2">
          Testimonials
        </p>
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-gilroy mb-8 md:mb-12">
          Our Client Reviews
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 42,
            },
          }}
          slidesPerView={1}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="rounded-2xl overflow-hidden shadow-lg relative h-[476px] shadow-[0_6px_15px_rgba(0,0,0,0.12)]">
                {/* Background Image */}
                <div className="h-full w-full shadow-[0_6px_15px_rgba(0,0,0,0.12)]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* White Card Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-md p-6 text-center">
                  {/* Avatar */}
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-4 border-white mx-auto -mt-12">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-bold font-gilroy text-lg text-[#1e1e1e] mt-2">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#1e1e1e] font-gilroy font-medium mb-4 opacity-60">
                    {t.role}
                  </p>

                  {/* Review */}
                  <p className="text-[#1e1e1e] mb-4 text-sm font-gilroy">
                    “{t.review}”
                  </p>

                  {/* Rating */}
                  <Rating value={t.rating} readOnly size="small" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default TestimonialSlider;
