import React from "react";
import Hero from "../components/hero";
import ProductsSlider from "../components/products-slider";
import Experiences from "../components/experiences";
import Navbar from "../components/navbar";
import { useCart } from "../components/context/CartContext";
import Footer from "../components/footer";
import Materials from "../components/Materials";


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
