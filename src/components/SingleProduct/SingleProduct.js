import React from "react";
import "./SingleProduct.css";
import truckIcon from "../../img/icons/truck_delivery.svg";
import storeIcon from "../../img/icons/store.svg";
import Card from "@mui/material/Card";

export const SingleProduct = () => {
  return (
    <div className="single-product-container">
      <div className="breadcrumbs-product-img">
        <div className="breadcrumbs">
          <p>INICIO / PROTEÍNAS / WHEY PROTEIN</p>
        </div>
        <div>Imágenes</div>
      </div>
      <div className="product-information-container">
        <p>Brand</p>
        <h2>Whey Protein - Original</h2>
        <div className="product-numbers-container">
          <div className="discount-container">
            <p>-5%</p>
          </div>
          <div>
            <p className="product-price">$68.390</p>
          </div>
          <div>
            <p className="price-before">$71.990</p>
          </div>
        </div>
        <div>
          <div className="free-shipping-container">
            <p className="free-shipping">ENVIO GRATIS STGO</p>
          </div>
        </div>
        <div>
          <p>SKU 1588023425509</p>
        </div>
        <div>
          <Card variant="outlined" className="product-description-card">
            <p>
              Exclusiva fórmula proteica a base de suero de leche aislado e
              hidrolizado que ha sido cientificamente diseñada para construir
              músculo magro libre de grasa, aumentar la fuerza y mejorar el
              rendimiento deportivo.Cada porción contiene 30 g de proteína y una
              matriz de aminoácidos de cadena ramificada, glutamina y creatina
              para acelarar el aumento de músculo y la fuerza.
            </p>
          </Card>
        </div>
        <div>
          <p>Sabor:</p>
          <div>
            <select class="form-select">
              <option selected>Escoger sabor</option>
              <option value="">New Delhi</option>
              <option value="">Istanbul</option>
              <option value="">Jakarta</option>
            </select>
          </div>
        </div>
        <div className="quantity-button-container">
          <div className="quantity-container">
            <div className="quantity-control-container">
              <p>-</p>
            </div>
            <div className="quantity">1</div>
            <div className="quantity-control-container">
              <p>+</p>
            </div>
          </div>
          <button className="btn-outline margin">Agregar al carrito</button>
        </div>
        <div>
          <p>Tipo de Entrega:</p>
          <div className="inputs-radio-container">
            <div className="input-radio-container">
              <img src={truckIcon} alt="Delivery" />
              <label className="input-radio-text">Despacho a domicilio</label>
              <input type="radio" name="opcion" value="opcion1" />
            </div>
            <div className="input-radio-container" style={{ marginLeft: '20px' }}>
              <img src={storeIcon} alt="Retiro" />
              <label className="input-radio-text">
                Retiro en tienda GRATIS
              </label>
              <input type="radio" name="opcion" value="opcion1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
