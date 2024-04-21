import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import { ProductCarousel } from "./components/ProductCarousel/ProductCarousel";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`App ${isMenuOpen ? "menu-open" : ""}`}>
      {isMenuOpen && (
        <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      )}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="main-container">
        <SingleProduct />
        <div className="divider"></div>
        <ProductCarousel />
      </div>
    </div>
  );
}

export default App;
