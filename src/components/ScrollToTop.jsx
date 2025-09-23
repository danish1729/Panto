import { useEffect, useState } from "react";

function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 bg-[#E58411] text-white px-3 py-1 rounded-full shadow-lg font-gilroy text-lg transition-opacity ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:bg-[#cf730c]`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTopBtn