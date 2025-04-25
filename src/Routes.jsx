import React,{useState,lazy} from 'react';
import { Routes, Route,useLocation } from "react-router-dom";



const Home=lazy(()=>import("./Components/RouteComponents/Home.jsx"))

const Contact=lazy(()=>import("./Components/RouteComponents/Contact.jsx"))
const About=lazy(()=>import("./Components/Component/About.jsx"))
const AiChat=lazy(()=>import("./Components/RouteComponents/AiChat.jsx"))
const Service=lazy(()=>import("./Components/RouteComponents/Service.jsx"))


const AppRoutes = () => {
  return (<>
  <Routes>
              <Route path="/" element={<Home /> } />
              
                 <Route path="/contact" element={<Contact /> } />
                 
                                  <Route path="/about" element={<About /> } />     
                                  <Route path="/services" element={<Service /> } /> 

               <Route path="/ai" element={<AiChat /> } /> 
              
  
  </Routes>
  </>)
}

export default AppRoutes;