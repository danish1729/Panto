
import { Link } from "react-router-dom";

const Materials = () => {
  return (
    <div className="py-12 md:py-24 px-4 sm:px-8 md:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="text-center md:text-left">
        <p className="text-[#E58411] font-semibold uppercase tracking-widest font-gilroy text-sm">
          Materials
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold leading-tight mt-4 md:mt-5 font-gilroy text-[#1e1e1e]">
          Very Serious <br className="hidden sm:inline" /> Materials For Making{" "}
          <br className="hidden sm:inline" /> Furniture
        </h2>
        <p className="mt-4 md:mt-5 text-[#1e1e1e] leading-relaxed font-gilroy opacity-80 text-sm md:text-base">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <Link to="/about">
          <button
            type="button"
            className="mt-6 inline-flex items-center text-[#E58411] font-medium font-gilroy text-sm"
          >
            More Info <span className="ml-2">→</span>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-[1fr_1.8fr] gap-4 sm:gap-6 w-full mx-auto max-w-2xl md:max-w-3xl">
        <img
          src="/testimonial-1.png"
          alt="Testimonial of a customer"
          className="w-full h-[100%] object-cover rounded-xl shadow-lg"
        />

        <div className="row-span-2 h-full flex items-end relative">
          <img
            src="/testimonial-2.png"
            alt="Wooden furniture material"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
          
        </div>

        <img
          src="/testimonial-3.png"
          alt="Modern furniture material"
          className="w-full h-[100%] sm:h-60 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Materials;
