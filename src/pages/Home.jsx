import Hero  from "../components/Hero.jsx";
import ProductsSlider from "../components/ProductsSlider.jsx";
import Experiences from "../components/Experiences.jsx";
import { useCart } from "../components/context/CartContext.jsx";
import Footer from "../components/Footer.jsx";
import Materials from "../components/Materials.jsx";


const Home = () => {
  const { addToCart } = useCart();

  return (
    <>
      <Hero />
      <ProductsSlider addToCart={addToCart} />
      <Experiences />
      <Materials />
      <Footer />
    </>
  );
};

export default Home;
