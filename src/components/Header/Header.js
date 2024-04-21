import React, { useState } from "react";
import "./Header.css";
import userIcon from "../../img/icons/user.svg";
import truckIcon from "../../img/icons/truck.svg";
import bagIcon from "../../img/icons/bag.svg";
import searchIcon from "../../img/icons/search.svg";
import cartIcon from "../../img/icons/cart.svg";
import menuIcon from "../../img/icons/menu.svg";

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-content">
      {/* Barra de msj descuento y acciones */}
      <div className="user-actions-bar">
        <div className="msg-discount-container">
          <p>15% Off EN TODO CON EL CÓDIGO: xx15off</p>
        </div>
        <div className="user-actions-container">
          <div className="img-msg-container">
            <img src={userIcon} alt="Iniciar sesion" />
            <p>Iniciar sesi&oacute;n</p>
          </div>
          <div className="vertical-divider hidde-in-mobile"></div>
          <div className="tracking-store-container">
            <div className="img-msg-container">
              <img src={truckIcon} alt="Seguimiento" />
              <p style={{ marginLeft: "5px" }}>Seguimiento</p>
            </div>
            <div className="vertical-divider"></div>
            <div className="img-msg-container" style={{ marginRight: "10px" }}>
              <img src={bagIcon} alt="Bolsa" />
              <p>Tiendas</p>
            </div>
          </div>
        </div>
      </div>
      {/* Logo - Menu de navegacion - Buscar - Carrito  */}
      <div className="logo-menu-container">
        {/* Menu movil */}
        <div>
          <a
            href="#"
            className="pointer"
            id="menuToggle"
            onClick={handleMenuToggle}
          >
            <img src={menuIcon} alt="Menu" className="menu-icon" />
          </a>
        </div>
        <div className="brand-logo-container">
          <h2 className="brand-title">BRAND</h2>
        </div>
        <div className="menu-search-cart-container">
          <div className="nav-menu-container">
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
          <div className="search-cart-container">
            <img className="pointer" src={searchIcon} alt="Buscar" />
            <img
              src={cartIcon}
              alt="Carrito"
              style={{ marginLeft: "10px" }}
              className="pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
