import React from "react";
import { useDispatch, useSelector } from "react-redux";
import basket from "../../components/assets/Img/Корзина.svg";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const { product, basket } = useSelector((s) => s);
  const bas = basket.some((some) => some.id === el.id);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const addToBasket = (data) => {
    dispatch({ type: "ADD_TO_BASKET", payload: data });
  };
  const plus = (data) => {
    dispatch({ type: "PLUS", payload: data });
  };
  const minus = (data) => {
    dispatch({ type: "MINUS", payload: data });
  };
  return (
    <div className="ProductCard">
      <img src={el.img} alt="img" />
      <h1>{el.name}</h1>
      <h1>{el.des}</h1>
      <h1>{el.price}</h1>
      <div className="btns">
        <div className="count">
          <button onClick={()=> minus(el)}>-</button>
          <h1>{el.quant}</h1>
          <button onClick={() => plus(el)}>+</button>
        </div>
        {!bas ? (
          <button onClick={() => addToBasket(el)}>в корзину</button>
        ) : (
          <img src={basket} onClick={() => nav("/basket")} alt="img" />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
