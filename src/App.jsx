/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./css/app.css";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>

      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={<h1 className="container">404 NOT FOUND</h1>}
          />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
