import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AddProoduct from "./components/AddProduct";
import ProductCard from "./components/ProductCard";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/addProduct" element={<AddProoduct />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
    </div>
  );
}

export default App;
