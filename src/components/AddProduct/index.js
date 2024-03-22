import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddProoduct = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [cat, setCat] = useState("");
  const [des, setDes] = useState("");
  const [Price, setPrice] = useState("");
  const dispatch = useDispatch();
  const AddProoduct = () => {
    let obj = {
      img,
      name,
      cat,
      des,
      Price,
      quant: 1
    };
    dispatch({type:"ADD_PRODUCT", payload:obj})
  };
  return (
    <div id="addProduct">
      <div className="container">
        <div className="addProduct">
          <h1>Create Product</h1>
          <input
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="Url..."
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setCat(e.target.value)}
            type="text"
            placeholder="Category"
          />
          <input
            onChange={(e) => setDes(e.target.value)}
            type="text"
            placeholder="Description"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
          />
          <button onClick={() => AddProoduct()}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default AddProoduct;
