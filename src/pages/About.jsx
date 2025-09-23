import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-[#F7F7F7] flex items-center justify-center text-center">
        <div className="max-w-3xl px-6">
          <h1 className="text-[42px] font-bold font-gilroy text-[#1E1E1E] mb-4">
            About <span className="text-[#E58411]">Panto</span>
          </h1>
          <p className="text-lg text-[#5a5a5a] font-inter">
            Crafting timeless furniture that blends comfort, quality, and design
            for modern living.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full px-[96px] py-[60px] bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] font-bold font-gilroy text-[#1E1E1E] mb-6">
            Our Story
          </h2>
          <p className="text-lg text-[#5a5a5a] font-inter leading-relaxed">
            Founded with a passion for craftsmanship, Panto started as a small
            workshop dedicated to making high-quality furniture that lasts for
            generations. Over the years, we’ve grown into a trusted brand, loved
            for our elegant designs, sustainable practices, and commitment to
            excellence.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full px-[96px] py-[60px] bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-[24px] font-bold font-gilroy text-[#E58411] mb-4">
              Our Mission
            </h3>
            <p className="text-[#5a5a5a] font-inter">
              To create furniture that enhances everyday living, combining
              functionality with timeless design.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-[24px] font-bold font-gilroy text-[#E58411] mb-4">
              Our Values
            </h3>
            <p className="text-[#5a5a5a] font-inter">
              We believe in sustainability, craftsmanship, and providing value
              that goes beyond just furniture.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-[24px] font-bold font-gilroy text-[#E58411] mb-4">
              Our Promise
            </h3>
            <p className="text-[#5a5a5a] font-inter">
              Every piece we make is designed with care and built to last,
              ensuring your home feels truly yours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-[96px] py-[80px] bg-white text-center">
        <h2 className="text-[32px] font-bold font-gilroy text-[#1E1E1E] mb-6">
          Ready to Furnish Your Home?
        </h2>
        <p className="text-lg text-[#5a5a5a] mb-8 font-inter">
          Explore our wide collection of furniture designed to bring beauty and
          comfort into your life.
        </p>
        <Link to="/shop">
          <button className="bg-[#E58411] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#cf6f0d] transition-colors">
            Shop Now
          </button>
        </Link>
      </section>
    </>
  );
}

export default About;
