import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EmailMarketing = () => (
  <>
    <Navbar />
    {/* Hero Section */}
    <div className="relative w-full h-[380px] flex items-center justify-center bg-[#f7f7f7]">
      <img
        src="/hero-image.png"
        alt="Email Marketing Hero"
        className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
        style={{ zIndex: 1 }}
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-40 rounded-b-2xl"
        style={{ zIndex: 2 }}
      />
      <h1
        className="relative z-10 text-white text-5xl font-bold font-gilroy text-center drop-shadow-lg"
        style={{ zIndex: 3 }}
      >
        Email Marketing
      </h1>
    </div>

    {/* Content Section */}
    <div className="w-full flex justify-center items-center py-20 bg-[#f7f7f7]">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-10 mx-4">
        <p className="text-[#E58411] font-gilroy text-center mb-8 font-semibold text-lg">
          Grow your business with targeted email campaigns.
        </p>
        <p className="text-[#1e1e1e] font-gilroy text-xl mb-8 text-center opacity-80">
          Our email marketing service helps you reach your audience with
          personalized messages, automated campaigns, and detailed analytics.
          Boost engagement and drive sales with our proven strategies.
        </p>
        <ul className="list-disc pl-8 text-[#1e1e1e] font-gilroy opacity-80 text-lg mb-8">
          <li>Automated email sequences</li>
          <li>Segmentation & personalization</li>
          <li>Performance tracking</li>
        </ul>
        <div className="flex justify-center">
          <button className="bg-[#E58411] text-white font-gilroy font-semibold px-8 py-3 rounded-lg hover:bg-[#cf730c] transition text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default EmailMarketing;
