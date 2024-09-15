import React, { useState } from "react";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";


export const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="sorry" /></Link>
        <Link to="/"><p>Forever</p></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="sorry"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
