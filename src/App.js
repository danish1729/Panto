import "./App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/single-product";
import { CartProvider } from "./components/context/CartContext";
import { useCheckoutAccess } from "./components/context/CheckoutAccessContext";
import Checkout from "./pages/checkout";
import ThankYou from "./pages/ThankYou";
import Shop from "./pages/shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmailMarketing from "./pages/EmailMarketing";
import Campaigns from "./pages/Campaigns";
import Branding from "./pages/Branding";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTopBtn from "./components/ScrollToTop";



function App() {
  const { canAccessCheckout } = useCheckoutAccess();

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route
          path="/checkout"
          element={canAccessCheckout ? <Checkout /> : <Home />}
        />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/email-marketing" element={<EmailMarketing />} />
        <Route path="/services/campaigns" element={<Campaigns />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <ScrollToTopBtn />
    </CartProvider>
  );
}

export default App;
