import { useState, useEffect } from "react";
import { useCart } from "../components/context/CartContext";
import {
  MdDeleteOutline,
  MdExpandMore,
  MdExpandLess,
  MdCreditCard,
  MdAttachMoney,
} from "react-icons/md";
import { FaApplePay, FaGooglePay, FaPaypal } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const shakeVariant = {
  error: { x: [-8, 8, -8, 8, 0], transition: { duration: 0.4 } },
  normal: { x: 0 },
};

const fadeVariant = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
};

const collapseVariant = {
  open: { height: "auto", opacity: 1 },
  collapsed: { height: 0, opacity: 0, overflow: "hidden" },
};

const validate = (formData) => {
  let newErrors = {};
  if (!formData.name.trim()) newErrors.name = "Full name is required";
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    newErrors.email = "Enter a valid email";
  }
  if (!formData.address.trim()) newErrors.address = "Address is required";
  if (!formData.city.trim()) newErrors.city = "City is required";
  if (!formData.zip.trim()) {
    newErrors.zip = "ZIP code is required";
  } else if (!formData.zip.match(/^\d{4,10}$/)) {
    newErrors.zip = "Enter a valid ZIP code";
  }
  return newErrors;
};

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, setCart } = useCart();
  const [cartError, setCartError] = useState("");
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    setErrors(validate(updated));
    setCartError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cart.length) {
      setCartError("Your cart is empty. Please add items before checkout.");
      return;
    }
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setCart([]);
      navigate("/thank-you");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] py-10 px-6 font-gilroy">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-bold text-[#1e1e1e] tracking-wide transition-colors hover:text-[#E58411]"
          >
            Panto
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-xl rounded-2xl p-8 lg:order-2"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#1e1e1e] font-gilroy">
                Order Summary
              </h2>
              <motion.button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="lg:hidden text-gray-500 hover:text-gray-800 transition-transform duration-300"
                animate={{ rotate: isCollapsed ? 0 : 180 }}
              >
                {isCollapsed ? (
                  <MdExpandMore size={28} />
                ) : (
                  <MdExpandLess size={28} />
                )}
              </motion.button>
            </div>

            <motion.div
              initial="collapsed"
              animate={isCollapsed ? "collapsed" : "open"}
              variants={collapseVariant}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 shadow-sm bg-[#f7f7f7]"
                    >
                      <div className="w-14 h-14 flex-shrink-0 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 px-4">
                        <h3 className="text-base font-semibold text-[#1e1e1e] font-gilroy">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            className="px-2 py-1 bg-gray-200 rounded font-gilroy"
                            onClick={() => updateQuantity(index, -1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-2 font-gilroy">
                            {item.quantity || 1}
                          </span>
                          <button
                            className="px-2 py-1 bg-gray-200 rounded font-gilroy"
                            onClick={() => updateQuantity(index, 1)}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-[#E58411] mt-1 font-gilroy">
                          $ {item.price}
                        </p>
                      </div>
                      <button
                        className="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded"
                        onClick={() => removeFromCart(index)}
                      >
                        <MdDeleteOutline />
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <motion.p
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeVariant}
                    className="text-gray-500 font-gilroy"
                  >
                    Your cart is empty
                  </motion.p>
                )}
              </div>
              <div className="flex justify-between mt-6 text-lg font-bold font-gilroy">
                <span>Total:</span>
                <span className="text-[#E58411]">$ {subtotal}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Billing Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-8 lg:order-1"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1e1e1e] font-gilroy">
              Checkout
            </h2>

            <AnimatePresence>
              {cartError && (
                <motion.p
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeVariant}
                  className="text-red-500 text-sm mb-3 font-gilroy"
                >
                  {cartError}
                </motion.p>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <motion.div
                animate={errors.name ? "error" : "normal"}
                variants={shakeVariant}
              >
                <label className="block text-base font-medium text-[#1e1e1e] font-gilroy mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg font-gilroy focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#E58411] focus:ring-[#E58411]"
                  }`}
                  placeholder="Your full name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeVariant}
                      className="text-red-500 text-sm mt-2 font-gilroy"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email */}
              <motion.div
                animate={errors.email ? "error" : "normal"}
                variants={shakeVariant}
              >
                <label className="block text-base font-medium text-[#1e1e1e] font-gilroy mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg font-gilroy focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#E58411] focus:ring-[#E58411]"
                  }`}
                  placeholder="you@email.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeVariant}
                      className="text-red-500 text-sm mt-2 font-gilroy"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Address */}
              <motion.div
                animate={errors.address ? "error" : "normal"}
                variants={shakeVariant}
              >
                <label className="block text-base font-medium text-[#1e1e1e] font-gilroy mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg font-gilroy focus:outline-none focus:ring-2 ${
                    errors.address
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#E58411] focus:ring-[#E58411]"
                  }`}
                  placeholder="Street address"
                />
                <AnimatePresence>
                  {errors.address && (
                    <motion.p
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeVariant}
                      className="text-red-500 text-sm mt-2 font-gilroy"
                    >
                      {errors.address}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* City & Zip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  animate={errors.city ? "error" : "normal"}
                  variants={shakeVariant}
                >
                  <label className="block text-base font-medium text-[#1e1e1e] font-gilroy mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg font-gilroy focus:outline-none focus:ring-2 ${
                      errors.city
                        ? "border-red-500 focus:ring-red-400"
                        : "border-[#E58411] focus:ring-[#E58411]"
                    }`}
                    placeholder="City"
                  />
                  <AnimatePresence>
                    {errors.city && (
                      <motion.p
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={fadeVariant}
                        className="text-red-500 text-sm mt-2 font-gilroy"
                      >
                        {errors.city}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  animate={errors.zip ? "error" : "normal"}
                  variants={shakeVariant}
                >
                  <label className="block text-base font-medium text-[#1e1e1e] font-gilroy mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg font-gilroy focus:outline-none focus:ring-2 ${
                      errors.zip
                        ? "border-red-500 focus:ring-red-400"
                        : "border-[#E58411] focus:ring-[#E58411]"
                    }`}
                    placeholder="ZIP code"
                  />
                  <AnimatePresence>
                    {errors.zip && (
                      <motion.p
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={fadeVariant}
                        className="text-red-500 text-sm mt-2 font-gilroy"
                      >
                        {errors.zip}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Payment Methods - Shopify Style */}
              <div className="space-y-4">
                <label className="block text-base font-medium text-[#1e1e1e] font-gilroy">
                  Payment Method
                </label>
                {["card", "cod", "paypal", "applepay", "googlepay"].map(
                  (method) => (
                    <div key={method} className="relative">
                      <input
                        type="radio"
                        id={method}
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={handleChange}
                        className="absolute opacity-0 peer"
                      />
                      <label
                        htmlFor={method}
                        className={`
                        flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all duration-200
                        peer-checked:border-[#E58411] peer-checked:bg-orange-50
                        peer-hover:bg-gray-50
                      `}
                      >
                        {method === "card" && (
                          <MdCreditCard
                            size={24}
                            className="text-gray-500 peer-checked:text-[#E58411]"
                          />
                        )}
                        {method === "cod" && (
                          <MdAttachMoney
                            size={24}
                            className="text-gray-500 peer-checked:text-[#E58411]"
                          />
                        )}
                        {method === "paypal" && (
                          <FaPaypal
                            size={24}
                            className="text-gray-500 peer-checked:text-[#E58411]"
                          />
                        )}
                        {method === "applepay" && (
                          <FaApplePay
                            size={24}
                            className="text-gray-500 peer-checked:text-[#E58411]"
                          />
                        )}
                        {method === "googlepay" && (
                          <FaGooglePay
                            size={24}
                            className="text-gray-500 peer-checked:text-[#E58411]"
                          />
                        )}
                        <span className="text-base font-medium text-gray-800">
                          {method === "card" && "Credit/Debit Card"}
                          {method === "cod" && "Cash on Delivery"}
                          {method === "paypal" && "PayPal"}
                          {method === "applepay" && "Apple Pay"}
                          {method === "googlepay" && "Google Pay"}
                        </span>
                      </label>
                    </div>
                  )
                )}
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 bg-[#E58411] text-white font-bold rounded-lg font-gilroy text-lg hover:bg-[#cf730c] transition"
              >
                Place Order
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
