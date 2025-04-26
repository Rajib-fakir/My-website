import React,{useState,lazy} from 'react';
const Seo = lazy(() => import("../../../Seo.jsx"));
import Canvas from "../Component/Canvas.jsx"
import About from "../Component/About.jsx"

const Home = () => {
  return (<>
      <Seo 
  title="Home"
  keywords="Rajib Fakir, Full Stack Web Developer, Freelance Web Developer, Web Portfolio, Project Based Developer, Frontend Backend Developer, Web Development Bangladesh, Portfolio Website, Hire Web Developer, Custom Web Solutions
"
  path="/"
  description="Hi, I’m Rajib Fakir — a Full Stack Web Developer specializing in project-based web solutions. Explore my portfolio to see how I turn ideas into high-quality, functional websites tailored to your goals."
/>
  
  
  
  <div className="p-0 m-0">
  
  <Canvas />
 
  
  </div></>)
}

export default Home;