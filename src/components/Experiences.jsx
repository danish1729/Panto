import { HiArrowLongRight } from "react-icons/hi2";

const Experiences = () => {
  return (
    <div className="py-12 md:py-24 px-4 sm:px-8 md:px-[80px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="/experiences.png"
          alt="Elegant interior design experience"
          className="z-[2] w-full max-w-sm md:max-w-none md:w-[80%] rounded-lg shadow-xl"
        />
        
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5 mt-8 md:mt-0 text-center md:text-left">
        <p className="font-gilroy font-semibold text-sm tracking-[3px] text-[#E58411] uppercase">
          EXPERIENCE
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold font-gilroy text-[#1E1E1E] capitalize leading-tight">
          we provide you the best experience
        </h2>
        <p className="font-gilroy text-base sm:text-lg font-medium leading-relaxed text-[#1e1e1e] opacity-80">
          You don't have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and luxurious style and with premium quality materials
        </p>
        <p className="text-sm font-medium font-gilroy text-[#E58411] leading-relaxed flex items-center justify-center md:justify-start gap-2 cursor-pointer">
          More Info <HiArrowLongRight />
        </p>
      </div>
    </div>
  );
};

export default Experiences;
