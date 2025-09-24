import { FaArrowLeft } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const SwiperPrev = () => {
  const swiper = useSwiper();
  return (
    <div
      className="absolute left-[-16px] top-[45%] -translate-y-1/2 z-10 cursor-pointer"
      onClick={() =>{
        swiper.slidePrev();
      }}
    >
      <FaArrowLeft className="w-[32px] h-[32px] bg-[#FFFFFF] text-black rounded-full p-[6px] pointer-events-none select-none shadow-sm" />
    </div>
  );
};

export default SwiperPrev;
