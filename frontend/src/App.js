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
import DevelopedBy from "./Components/DevelopedBy/DevelopedBy"
import Technologies from "./Components/Technologies/Technologies";
import About from "./Components/About/About";
import Office from "./Components/Office/Office";
import Contact from "./Components/Contact/Contact";

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

            <Route path="/developedBy" element={<DevelopedBy />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/office" element={<Office/>}/>
            <Route path="/contact" element={<Contact/>}/>


          </Routes>
          <Footer />
  
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
