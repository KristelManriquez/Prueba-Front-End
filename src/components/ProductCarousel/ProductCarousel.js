import React, { useRef } from "react";
import "./ProductCarousel.css";
import productImg3 from "../../img/product3.png";
import leftArrow from "../../img/icons/left_arrow.svg";
import rightArrow from "../../img/icons/right_arrow.svg";
import cartOutlinedIcon from "../../img/icons/cart_outlined.svg";

export const ProductCarousel = () => {
  const productsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (productsContainerRef.current) {
      productsContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (productsContainerRef.current) {
      productsContainerRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="product-carousel-container">
      <div className="main-title-container">
        <h2>TE PODRÍA INTERESAR TAMBIÉN</h2>
      </div>
      <div className="carousel-container">
        <div className="arrow" onClick={scrollLeft}>
          <img src={leftArrow} alt="Flecha izquierda" />
        </div>
        <div className="products-container" ref={productsContainerRef}>
          <div className="product-container">
            <div className="img-container">
              <div className="product-discount-container">
                <p>-57%</p>
              </div>
              <div className="product-cart-container">
                <img src={cartOutlinedIcon} alt="Carrito" />
              </div>
              <div className="product-main-img">
                <img src={productImg3} alt="Producto" />
              </div>
            </div>
            <div>
              <div className="brand-text-container">
                <p className="brand-text">Brand</p>
              </div>
              <p className="product-title">Shaker Brand 400 cc</p>
            </div>
            <div className="product-price-container">
              <p className="product-price">$7.990</p>
              <p className="product-price-before">$9.990</p>
            </div>
            <div
              className="free-shipping-container"
              style={{ marginTop: "10px" }}
            >
              <p className="free-shipping">ENVIO GRATIS STGO</p>
            </div>
          </div>
          <div className="product-container">
            <div className="img-container">
              <div className="product-discount-container">
                <p>-57%</p>
              </div>
              <div className="product-cart-container">
                <img src={cartOutlinedIcon} alt="Carrito" />
              </div>
              <div className="product-main-img">
                <img src={productImg3} alt="Producto" />
              </div>
            </div>
            <div>
              <div className="brand-text-container">
                <p className="brand-text">Brand</p>
              </div>
              <p className="product-title">Shaker Brand 400 cc</p>
            </div>
            <div className="product-price-container">
              <p className="product-price">$7.990</p>
              <p className="product-price-before">$9.990</p>
            </div>
            <div
              className="free-shipping-container"
              style={{ marginTop: "10px" }}
            >
              <p className="free-shipping">ENVIO GRATIS STGO</p>
            </div>
          </div>
          <div className="product-container">
            <div className="img-container">
              <div className="product-discount-container">
                <p>-57%</p>
              </div>
              <div className="product-cart-container">
                <img src={cartOutlinedIcon} alt="Carrito" />
              </div>
              <div className="product-main-img">
                <img src={productImg3} alt="Producto" />
              </div>
            </div>
            <div>
              <div className="brand-text-container">
                <p className="brand-text">Brand</p>
              </div>
              <p className="product-title">Shaker Brand 400 cc</p>
            </div>
            <div className="product-price-container">
              <p className="product-price">$7.990</p>
              <p className="product-price-before">$9.990</p>
            </div>
            <div
              className="free-shipping-container"
              style={{ marginTop: "10px" }}
            >
              <p className="free-shipping">ENVIO GRATIS STGO</p>
            </div>
          </div>
          <div className="product-container">
            <div className="img-container">
              <div className="product-discount-container">
                <p>-57%</p>
              </div>
              <div className="product-cart-container">
                <img src={cartOutlinedIcon} alt="Carrito" />
              </div>
              <div className="product-main-img">
                <img src={productImg3} alt="Producto" />
              </div>
            </div>
            <div>
              <div className="brand-text-container">
                <p className="brand-text">Brand</p>
              </div>
              <p className="product-title">Shaker Brand 400 cc</p>
            </div>
            <div className="product-price-container">
              <p className="product-price">$7.990</p>
              <p className="product-price-before">$9.990</p>
            </div>
            <div
              className="free-shipping-container"
              style={{ marginTop: "10px" }}
            >
              <p className="free-shipping">ENVIO GRATIS STGO</p>
            </div>
          </div>
          <div className="product-container">
            <div className="img-container">
              <div className="product-discount-container">
                <p>-57%</p>
              </div>
              <div className="product-cart-container">
                <img src={cartOutlinedIcon} alt="Carrito" />
              </div>
              <div className="product-main-img">
                <img src={productImg3} alt="Producto" />
              </div>
            </div>
            <div>
              <div className="brand-text-container">
                <p className="brand-text">Brand</p>
              </div>
              <p className="product-title">Shaker Brand 400 cc</p>
            </div>
            <div className="product-price-container">
              <p className="product-price">$7.990</p>
              <p className="product-price-before">$9.990</p>
            </div>
            <div
              className="free-shipping-container"
              style={{ marginTop: "10px" }}
            >
              <p className="free-shipping">ENVIO GRATIS STGO</p>
            </div>
          </div>
        </div>
        <div className="arrow" onClick={scrollRight}>
          <img src={rightArrow} alt="Flecha derecha" />
        </div>
      </div>
    </div>
  );
};
