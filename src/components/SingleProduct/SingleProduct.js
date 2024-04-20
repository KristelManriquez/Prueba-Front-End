import React, { useState, useEffect } from "react";
import "./SingleProduct.css";
import truckIcon from "../../img/icons/truck_delivery.svg";
import storeIcon from "../../img/icons/store.svg";
import Card from "@mui/material/Card";
import productImg from "../../img/product.png";
import productImg2 from "../../img/product2.png";
import starImg from "../../img/icons/star.svg";

export const SingleProduct = () => {
  // Consumo API
  const [flavors, setFlavors] = useState([]);
  const [selectedFlavor, setSelectedFlavor] = useState("");

  useEffect(() => {
    fetch("https://preapi.aquaforce.cl/api/sabores")
      .then((response) => response.json())
      .then((data) => {
        setFlavors(data.sabores);
      })
      .catch((error) => {
        console.error("Error al recibir datos de la API: ", error);
      });
  }, []);

  function handleFlavorChange(event) {
    setSelectedFlavor(event.target.value);
  }

  // Cantidad del producto
  const [productQuantity, setProductQuantity] = useState(1);
  function substractQuantity() {
    if (productQuantity > 1) {
      setProductQuantity((prevQuantity) => prevQuantity - 1);
    }
  }
  function addQuantity() {
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  }

  return (
    <div className="single-product-container">
      <div className="breadcrumbs-product-img">
        <div className="breadcrumbs">
          <p>INICIO / PROTEÍNAS / WHEY PROTEIN</p>
        </div>
        <div className="product-img-main-container">
          <div className="main-img-container">
            <img src={productImg} alt="Producto" />
          </div>
          <div className="product-imgs-container">
            <img src={productImg2} alt="Producto" />
            <img src={productImg2} alt="Producto" />
            <img src={productImg2} alt="Producto" />
          </div>
        </div>
      </div>
      <div className="product-information-container">
        <p className="brand-name">Brand</p>
        <div className="product-title-container">
          <h2>Whey Protein - Original</h2>
        </div>
        <div className="product-numbers-container">
          <div className="discount-container">
            <p>-5%</p>
          </div>
          <div className="prodct-price-container">
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
        <div className="sku-container">
          <p>SKU 1588023425509</p>
        </div>
        <div className="product-description-container">
          <Card variant="outlined" className="product-description-card">
            <p className="product-description">
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
            <select className="form-select">
              <option selected>Escoger sabor</option>
              {flavors.map((flavor) => (
                <option key={flavor.name} value={flavor.name}>
                  {flavor.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="quantity-button-container">
          <div className="quantity-container">
            <div className="quantity-control-container">
              <button
                className="btn-control-quantity pointer"
                id="btn-substract-quantity"
                onClick={substractQuantity}
              >
                -
              </button>
            </div>
            <div className="quantity">{productQuantity}</div>
            <div className="quantity-control-container">
              <button
                className="btn-control-quantity pointer"
                onClick={addQuantity}
              >
                +
              </button>
            </div>
          </div>
          <button className="btn-outline margin pointer">
            Agregar al carrito
          </button>
        </div>
        <div>
          <p>Tipo de Entrega:</p>
          <div className="inputs-radio-container">
            <div className="input-radio-container">
              <img src={truckIcon} alt="Delivery" />
              <label className="input-radio-text">Despacho a domicilio</label>
              <input type="radio" name="opcion" value="opcion1" />
            </div>
            <div
              className="input-radio-container"
              style={{ marginLeft: "20px" }}
            >
              <img src={storeIcon} alt="Retiro" />
              <label className="input-radio-text">
                Retiro en tienda GRATIS
              </label>
              <input type="radio" name="opcion" value="opcion1" />
            </div>
          </div>
        </div>
        <div>
          <div className="rate-information-container">
            <span className="ratings-quantity">12</span>
            <span style={{ marginRight: ".5em" }}>
              valoraciones de clientes
            </span>
            <img src={starImg} alt="Estrella" />
            <div className="stars-quantity-container">
              <p>4.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
