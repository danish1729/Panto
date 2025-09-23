import { CiSearch } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[url('hero-image.png')] min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-24 pb-12 px-4 sm:px-8 md:px-[80px]">
        <Navbar />
        <h1 className="text-white text-5xl sm:text-6xl md:text-[80px] mt-12 md:mt-[86px] font-bold font-gilroy leading-tight text-center capitalize">
          Make your interior more <br /> minimalistic & modern
        </h1>
        <p className="text-white text-base sm:text-xl md:text-[24px] font-medium font-gilroy leading-normal text-center mt-6 w-full md:w-[606px] opacity-80 z-[1] px-4">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <div className="w-11/12 max-w-[350px] h-[56px] bg-white/10 backdrop-blur-sm rounded-[42px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)] cursor-pointer mt-8 md:mt-[45px] flex items-center justify-between p-2 pl-5 gap-4 z-[1]">
          <p className="text-white text-sm sm:text-base md:text-[18px] font-medium font-gilroy leading-normal opacity-80">
            search for furniture
          </p>
          <span className="w-[40px] h-[40px] bg-[#E58411] rounded-full p-[11px] flex items-center justify-center">
            <CiSearch className="w-6 h-6 text-white" />
          </span>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-[120px] px-4 sm:px-8 md:px-[80px] padding-container gap-8 md:gap-14">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold font-gilroy text-[#1E1E1E] capitalize text-center md:text-left md:mr-[90px] flex-shrink-0">
          why <br /> choosing us
        </h2>

        {/* Why Choose Us Cards */}
        <div className="flex flex-col sm:flex-row md:flex-row items-stretch justify-center gap-8 md:gap-[28px] w-full">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold font-gilroy text-[#1E1E1E]">
              Luxury facilities
            </h3>
            <p className="text-sm sm:text-base font-medium font-gilroy text-[#1E1E1E] leading-[185%] opacity-80">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <p className="text-sm font-medium font-gilroy text-[#E58411] leading-[185%] flex items-center justify-center sm:justify-start gap-[11px] cursor-pointer">
              More Info <HiArrowLongRight />
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold font-gilroy text-[#1E1E1E]">
              Luxury facilities
            </h3>
            <p className="text-sm sm:text-base font-medium font-gilroy text-[#1E1E1E] leading-[185%] opacity-80">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <p className="text-sm font-medium font-gilroy text-[#E58411] leading-[185%] flex items-center justify-center sm:justify-start gap-[11px] cursor-pointer">
              More Info <HiArrowLongRight />
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold font-gilroy text-[#1E1E1E]">
              Luxury facilities
            </h3>
            <p className="text-sm sm:text-base font-medium font-gilroy text-[#1E1E1E] leading-[185%] opacity-80">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <p className="text-sm font-medium font-gilroy text-[#E58411] leading-[185%] flex items-center justify-center sm:justify-start gap-[11px] cursor-pointer">
              More Info <HiArrowLongRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
