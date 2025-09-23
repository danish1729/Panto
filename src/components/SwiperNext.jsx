import { FaArrowRight } from "react-icons/fa6";

const SwiperNext = () => {
  return (
    <div
      className='pointer-events-auto absolute right-[75px] top-[57%] -translate-y-1/2 z-10 select-none cursor-pointer'
      onMouseDown={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <FaArrowRight className="w-[32px] h-[32px] bg-[#FFFFFF] text-black rounded-full p-[6px] pointer-events-none select-none shadow-sm" />
    </div>
  );
};

export default SwiperNext;
