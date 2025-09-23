import { FaArrowLeft } from "react-icons/fa6";

const SwiperPrev = () => {
  return (
    <div
      className="pointer-events-auto absolute left-[75px] top-[57%] -translate-y-1/2 z-10 select-none cursor-pointer"
      onMouseDown={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <FaArrowLeft className="w-[32px] h-[32px] bg-[#FFFFFF] text-black rounded-full p-[6px] pointer-events-none select-none shadow-sm" />
    </div>
  );
};

export default SwiperPrev;
