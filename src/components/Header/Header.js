import React from "react";
import "./Header.css";
import userIcon from "../../img/icons/user.svg";
import truckIcon from "../../img/icons/truck.svg";
import bagIcon from "../../img/icons/bag.svg";
import searchIcon from "../../img/icons/search.svg";
import cartIcon from "../../img/icons/cart.svg";

export const Header = () => {
  return (
    <div className="header-content">
      {/* Barra de msj descuento y acciones */}
      <div className="userActionsBar">
        <div className="msg-discount-container">
          <p>15% Off EN TODO CON EL CÓDIGO: xx15off</p>
        </div>
        <div className="user-actions-container">
          <div className="img-msg-container">
            <img src={userIcon} alt="Iniciar sesion" />
            <p>Iniciar sesi&oacute;n</p>
          </div>
          <div className="img-msg-container">
            <img src={truckIcon} alt="Seguimiento" />
            <p>Seguimiento</p>
          </div>
          <div className="img-msg-container">
            <img src={bagIcon} alt="Bolsa" />
            <p>Tiendas</p>
          </div>
        </div>
      </div>
      {/* Logo - Menu de navegacion - Buscar - Carrito  */}
      <div className="logo-menu-container">
        <div className="brand-logo-container">
          <h2>BRAND</h2>
        </div>
        <div className="menu-search-cart-container">
          <div className="nav-menu-container">
            <nav>
              <ul className="menu-items">
                <li>SHOP ALL</li>
                <li>BEST SELLER</li>
                <li>PROTEINAS</li>
                <li>SUPLEMENTOS</li>
                <li>PRE ENTRENOS</li>
                <li>ACCESORIOS</li>
                <li>BARRAS Y SNACK</li>
              </ul>
            </nav>
          </div>
          <div className="search-cart-container">
            <img src={searchIcon} alt="Buscar" />
            <img src={cartIcon} alt="Carrito" />
          </div>
        </div>
      </div>
    </div>
  );
};
