import { useNavigate, useParams } from "react-router-dom";
import Products from "../products";
import Navbar from "../components/navbar";
import { useCart } from "../components/context/CartContext";
import { useCheckoutAccess } from "../components/context/CheckoutAccessContext";
import React from "react";
import RelatedProductsSlider from "../components/RelatedProductsSlider";
import Footer from "../components/footer";

function SingleProduct() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const product = Products.find((p) => p.id === parseInt(id));
  const { setCanAccessCheckout } = useCheckoutAccess();
  const navigate = useNavigate();

  if (!product) return <h2>Product not found</h2>;

  return (
    <>
      <Navbar />

      <div className="pt-[100px] px-4 sm:px-8 md:px-16 lg:px-24">
        <p className="font-gilroy text-base sm:text-lg md:text-[22px] mb-4">
          Shop / {product.name}
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-5">
          {/* Product Image */}
          <div className="w-full md:w-1/2 lg:w-[50%] h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center bg-[#fafafa] rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain max-h-full p-4"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 lg:w-[40%] flex flex-col mt-4 md:mt-10 gap-2">
            <p className="text-sm font-inter text-[#8d8d8d]">
              {product.category}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold font-gilroy">
              {product.name}
            </h1>
            <p className="text-xl font-semibold mt-2">
              Price: ${product.price}
            </p>
            <p className="text-sm sm:text-base leading-relaxed opacity-80 mt-2">
              {product.description}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center mt-6">
              <div className="flex items-center gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-2 text-lg font-semibold">
                  {quantity || 1}
                </span>
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  product.quantity = quantity;
                  addToCart(product, quantity);
                  setQuantity(1);
                }}
                className="bg-[#E58411] text-white font-medium px-6 py-3 rounded-lg w-full transition hover:bg-[#c76f0c]"
              >
                Add to Cart
              </button>
            </div>

            {/* Buy Now */}
            <button
              onClick={() => {
                addToCart(product, quantity);
                setQuantity(1);
                setCanAccessCheckout(true); // allow checkout
                navigate("/checkout");
              }}
              className="bg-gray-800 text-white font-medium px-6 py-3 rounded-lg w-full mt-4 transition hover:bg-gray-900"
            >
              Buy Now
            </button>
          </div>
        </div>
        <RelatedProductsSlider
          category={product.category}
          addToCart={addToCart}
        />
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
