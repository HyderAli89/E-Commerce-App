import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import ShopContextProvider from "./Context/ShopContext";
import banner_kids from "./Components/Assets/Frontend_Assets/banner_kids.png";
import banner_mens from "./Components/Assets/Frontend_Assets/banner_mens.png";
import banner_women from "./Components/Assets/Frontend_Assets/banner_women.png";
function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={banner_mens} category="men" />}
            />
            <Route
              path="/womens"
              element={<ShopCategory banner={banner_women} category="women" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={banner_kids} category="kid" />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
