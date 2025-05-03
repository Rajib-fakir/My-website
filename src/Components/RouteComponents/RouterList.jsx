import React, { useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../public/styles/Navbar.css";
import logo from "../../assets/logo.png"
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // মেনু খোলার/বন্ধ করার স্টেট

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/ai", label: "Ai Chat" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // মেনুর অবস্থা পরিবর্তন
  };

useEffect(() => {
  if(menuOpen){
    document.body.classList.add("hidden")
  }else{
    document.body.classList.remove('hidden')
  }
}, [menuOpen]);





  return (
    <div>
      <nav  className="navbar">
        <div data-aos="fade-in" className="logo">
        <img src={logo} alt="logo"  className="img-logo"/>
        
        </div>
        {/* Hamburger Menu */}
        <button data-aos="fade-in" className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div data-aos="fade-in" className={`overlay ${menuOpen ? "active" : ""}`} onClick={toggleMenu}></div>
        <ul  className={`nav-links ${menuOpen ? "active" : ""}`}>
        <span data-aos="fade-in" className="close-sideBar" onClick={toggleMenu}>❌</span>
          {navLinks.map((link, index) => (
            <li 
              key={index}
              className={
                location.pathname === link.path ? "active-link" : ""
              }
              onClick={() => {
                navigate(link.path);
                setMenuOpen(false); // লিঙ্ক ক্লিক করলে মেনু বন্ধ
              }}
            >
            
              {link.label}
            </li>
          ))}
          <div
            className="underline"
            style={{
              left: `${navLinks.findIndex(
                (link) => link.path === location.pathname
              ) *125}px`,
            }}
          ></div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
