// import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/Frontend_Assets/logo_big.png";
import whatsapp_icon from "../Assets/Frontend_Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/Frontend_Assets/pintester_icon.png";
import instagram_icon from "../Assets/Frontend_Assets/instagram_icon.png";
import {Link} from "react-router-dom"


export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Forever</p>
      </div>
      <ul className="footer-links">
       <Link to={`/developedBy`} >Developed BY</Link>
       <Link to={`/technologies`}><li>Technolgies used</li></Link>
        <Link to={`/office`}><li>Offices</li></Link>
        <Link to={`/about`}><li>About</li></Link>
        <Link to={`/contact`}>contact</Link>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright  @Forever 2024  HYDERALI - All Right Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
