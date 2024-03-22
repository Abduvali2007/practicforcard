import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",

        marginTop: "100px",
      }}
    >
      {basket.map((el) => (
        <ProductCard el={el} />
      ))}
    </div>
  );
};

export default Basket;
