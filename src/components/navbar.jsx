import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { useCheckoutAccess } from "./context/CheckoutAccessContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const { setCanAccessCheckout } = useCheckoutAccess();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when cart or mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open || mobileMenuOpen);
  }, [open, mobileMenuOpen]);

  const categories = ["chair", "Beds", "sofa", "lamps"];

  // Light pages (white bg by default)
  const lightPages = [
    "/shop",
    "/about",
    "/contact",
    "/terms-and-conditions",
    "/privacy-policy",
  ];
  const isProductPage = /^\/product\/\d+$/.test(location.pathname);
  const isLightPage = lightPages.includes(location.pathname) || isProductPage;

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-[80px] py-5 z-50 transition-all duration-300 ${
          isScrolled || isLightPage
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <Link to={"/"}>
          <p className="text-[28px] font-bold font-gilroy">Panto</p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-[40px] text-[18px] font-medium font-gilroy [&>li]:cursor-pointer">
          <li className="relative group">
            <span className="hover:text-[#E58411] transition-colors">
              Furniture
            </span>
            <ul className="absolute top-8 left-0 hidden group-hover:block bg-white shadow-lg rounded-lg py-3 w-40 z-50">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/shop?category=${encodeURIComponent(cat)}`}
                    className="block px-4 py-2 text-[#1e1e1e] hover:bg-[#F7F7F7] hover:text-[#E58411] transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <Link to={"/shop"}>
            <li className="hover:text-[#E58411] transition-colors">Shop</li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:text-[#E58411] transition-colors">About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li className="hover:text-[#E58411] transition-colors">Contact</li>
          </Link>
        </ul>

        {/* Icons: Hamburger & Cart */}
        <div className="flex items-center gap-4">
          <HiOutlineMenuAlt3
            className="w-[30px] h-[30px] cursor-pointer md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          />

          <div
            className="relative cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <FaShoppingBag className="w-[24px] h-[24px] hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 bg-[#E58411] text-white px-[6px] py-[2px] rounded-full text-[14px] font-gilroy">
              {cart.length}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[60] backdrop-blur-[2px] transition-opacity duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`h-full w-[75%] max-w-sm bg-white p-6 float-left shadow-[rgba(0,0,0,0.3)_10px_0px_10px_0px] transform transition-transform duration-500 flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-gilroy font-bold text-[22px]">Menu</h2>
            <IoClose
              className="w-[32px] h-[32px] cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-4 text-xl font-medium font-gilroy">
            <li className="relative group">
              <span className="hover:text-[#E58411] transition-colors">
                Furniture
              </span>
              <ul className="mt-2 pl-4 space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      to={`/shop?category=${encodeURIComponent(cat)}`}
                      className="block text-[#1e1e1e] hover:text-[#E58411] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <Link to={"/shop"} onClick={() => setMobileMenuOpen(false)}>
              <li className="hover:text-[#E58411] transition-colors">Shop</li>
            </Link>
            <Link to={"/about"} onClick={() => setMobileMenuOpen(false)}>
              <li className="hover:text-[#E58411] transition-colors">
                About Us
              </li>
            </Link>
            <Link to={"/contact"} onClick={() => setMobileMenuOpen(false)}>
              <li className="hover:text-[#E58411] transition-colors">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed inset-0 z-[60] backdrop-blur-[2px] transition-opacity duration-700 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`h-full w-full sm:w-[50%] md:w-[40%] lg:w-[30%] bg-white p-[6px] float-right shadow-[rgba(0,0,0,0.3)_-10px_0px_10px_0px] transform transition-transform duration-700 flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className="font-gilroy font-bold text-[22px]">Shopping Cart</h2>
            <IoClose
              className="w-[32px] h-[32px] cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Cart Items */}
          <div className="p-4 space-y-4 flex-1 overflow-y-auto min-h-0 scrollbar-hide">
            {cart.length > 0 ? (
              cart.map((p, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-md overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 px-4">
                    <h3 className="text-sm font-medium text-gray-800">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => updateQuantity(index, -1)}
                        disabled={p.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-2">{p.quantity || 1}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => updateQuantity(index, 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 mt-1">
                      $ {p.price}
                    </p>
                  </div>
                  <button
                    className="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded"
                    onClick={() => removeFromCart(index)}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No items in your cart</p>
            )}
          </div>

          {/* Subtotal + Buttons */}
          <div className="border-t pt-4 px-4 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-700">
                Subtotal:
              </span>
              <span className="text-lg font-bold text-[#E58411]">
                $ {subtotal}
              </span>
            </div>

            <button
              onClick={() => {
                setCanAccessCheckout(true);
                navigate("/checkout");
                setOpen(false);
              }}
              className="bg-[#E58411] text-white px-6 py-3 rounded-lg w-full mb-2"
            >
              Buy Now
            </button>
            <button
              className="w-full py-3 text-[#E58411] font-bold"
              onClick={() => setOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
