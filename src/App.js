import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import { ProductCarousel } from "./components/ProductCarousel/ProductCarousel";

function App() {
  return (
    <div>
      <Header/>
      <div className="main-container">
        <SingleProduct/>
        <ProductCarousel/>
      </div>
    </div>
  );
}

export default App;
