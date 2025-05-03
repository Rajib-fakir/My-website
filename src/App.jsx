import { useState,useEffect,lazy } from 'react'
import { BrowserRouter,useLocation } from "react-router-dom";

import './App.css'
import "./bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AppContent=lazy(()=>import("./AppContent.jsx"))





function App() {
  const [count, setCount] = useState(0)
useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  return (
    <BrowserRouter>
<AppContent />
    </BrowserRouter>
  )
}

export default App
