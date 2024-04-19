import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SingleProduct />
      </div>
    </div>
  );
}

export default App;
