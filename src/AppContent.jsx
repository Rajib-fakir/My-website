import React,{useState,useEffect,lazy} from 'react';



const AppRoutes=lazy(()=>import("./Routes.jsx"))
const NavBar=lazy(()=>import("./Components/RouteComponents/RouterList.jsx"))



const AppContent = () => {
  return (<><div className="main-body">
  <div >
  <NavBar />
  </div>
  <AppRoutes />
        <footer className=" bg-dark text-light text-center p-2 mt-2">
        <p>&copy; 2025 MyPortfolio. All Rights Reserved.</p>
      </footer>
  </div></>)
}

export default AppContent;