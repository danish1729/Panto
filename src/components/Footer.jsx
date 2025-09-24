import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Testimonials />
      <footer className="bg-[#fafafa] py-12 px-4 sm:px-8 md:px-16 lg:px-[120px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold font-gilroy text-[#1e1e1e]">
              <Link to={"/"}>Panto</Link>
            </h2>
            <p className="text-sm font-medium font-gilroy leading-relaxed w-full max-w-sm mx-auto md:mx-0 mt-4">
              The advantage of hiring a workspace with us is that it gives you
              comfortable service and all-around facilities.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-8 lg:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-dm text-base text-[#F6973F]">Services</h3>
              <ul className="font-gilroy leading-relaxed text-sm text-[#1e1e1e] opacity-80 flex flex-col gap-3">
                <li className="whitespace-nowrap cursor-pointer">
                  <Link to="/services/email-marketing">Email Marketing</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/services/campaigns">Campaigns</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/services/branding">Branding</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-dm text-base text-[#F6973F]">Furniture</h3>
              <ul className="font-gilroy leading-relaxed text-sm text-[#1e1e1e] opacity-80 flex flex-col gap-3">
                <li className="whitespace-nowrap cursor-pointer">
                  <Link
                    to="/shop?category=Beds"
                    className="cursor-pointer hover:text-[#E58411] transition"
                  >
                    Beds
                  </Link>
                </li>
                <li className="whitespace-nowrap cursor-pointer">
                  <Link
                    to="/shop?category=chair"
                    className="cursor-pointer hover:text-[#E58411] transition"
                  >
                    Chair
                  </Link>
                </li>
                <li className="whitespace-nowrap cursor-pointer">
                  <Link
                    to="/shop?category=sofa"
                    className="cursor-pointer hover:text-[#E58411] transition"
                  >
                    Sofas
                  </Link>
                </li>
                <li className="whitespace-nowrap cursor-pointer">
                  <Link
                    to="/shop?category=lamps"
                    className="cursor-pointer hover:text-[#E58411] transition"
                  >
                    Lamps
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-dm text-base text-[#F6973F]">Follow Us</h3>
              <ul className="font-gilroy leading-relaxed text-sm text-[#1e1e1e] opacity-80 flex flex-col gap-3">
                <li className="flex items-center gap-2 whitespace-nowrap cursor-pointer">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaFacebook className="text-[#1e1e1e] opacity-80 cursor-pointer" />
                    <span className="cursor-pointer">Facebook</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 whitespace-nowrap cursor-pointer">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaTwitter className="text-[#1e1e1e] opacity-80 cursor-pointer" />
                    <span className="cursor-pointer">Twitter</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 whitespace-nowrap cursor-pointer">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaInstagram className="text-[#1e1e1e] opacity-80 cursor-pointer" />
                    <span className="cursor-pointer">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left mt-8 md:mt-16 pb-6 border-t border-gray-300 pt-6">
          <p className="text-gray-400 text-sm mb-2 sm:mb-0">Copyright © 2021</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-600">
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#E58411] transition"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-[#E58411] transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
