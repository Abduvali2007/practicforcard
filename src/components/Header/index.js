import React, { useState } from "react";
import efiopia from "../../components/assets/Img/Ethiopia.svg";
import sub from "../../components/assets/Img/Sun.svg";
import moon from "../../components/assets/Img/Moon and Stars.svg";
import bas from "../../components/assets/Img/Корзина.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch()
  const Sear = (e) => {
    setSearch(e.target.value);
    dispatch({type:"SEARCH" , payload : search})

  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/hero"}>
            <img src={efiopia} alt="img" />
          </Link>
          <input
            onChange={(e) => Sear(e)}
            type="text"
            placeholder=" я ищу..."
          />
          <img src={bas} onClick={() => nav("/addProduct")} alt="img" />
          <div className="header-btn">
            <button className="btn1">
              <img src={sub} alt="img" />
            </button>
            <button className="btn2">
              <img src={moon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
