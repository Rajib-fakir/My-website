import { useState,useEffect,lazy } from 'react'
import { BrowserRouter,useLocation } from "react-router-dom";

import './App.css'
import "./bootstrap.min.css";


const AppContent=lazy(()=>import("./AppContent.jsx"))





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
<AppContent />
    </BrowserRouter>
  )
}

export default App
