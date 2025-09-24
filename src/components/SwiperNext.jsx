import { FaArrowRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const SwiperNext = () => {
  const swiper = useSwiper();
  return (
    <div
      className='pointer-events-auto absolute right-[-16px] top-[45%] z-10 select-none cursor-pointer'
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <FaArrowRight className="w-[32px] h-[32px] bg-[#FFFFFF] text-black rounded-full p-[6px] pointer-events-none select-none shadow-sm" />
    </div>
  );
};

export default SwiperNext;
