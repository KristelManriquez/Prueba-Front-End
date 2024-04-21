import React from "react";
import "./MobileMenu.css";
import close from "../../img/close.png";

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu-container ${isOpen ? 'open' : ''}`}>
      <button className="close-btn pointer" onClick={onClose}>
        <img src={close} alt="Cerrar" />
      </button>
      <nav>
        <ul className="menu-items">
          <li>
            <a href="/" className="nav-item">
              SHOP ALL
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              BEST SELLER
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              PROTEINAS
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              SUPLEMENTOS
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              PRE ENTRENOS
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              ACCESORIOS
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              BARRAS Y SNACK
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
