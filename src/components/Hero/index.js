import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Hero = () => {
  const { product } = useSelector((s) => s);
  console.log(product, "pro");
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <button>Салаты</button>
          <button>Кофе</button>
          <button>Холодные напитки</button>
        </div>
        <div className="hero-foot">
          {product.map((el) => (
            <ProductCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
