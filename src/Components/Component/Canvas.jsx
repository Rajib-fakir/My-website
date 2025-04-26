import React from "react";
import "../../../public/styles/Animation.css";
import "../../../public/styles/custom.css"; // Custom CSS for styling

const Canvas = () => {
  return (
    <>
      <div className="app-container">
        {/* Hero Section */}
        <header className="hero-section text-white text-center py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-6 text-lg-start text-center">
                <h1 className="display-4 fw-bold">Hi, I'm a Web Developer</h1>
                <h6 className="lead">
                  I build high-performance, secure, and scalable web applications.
                </h6>
                <p className="tech-stack">
                

                
                
                
                  Technologies:
                   <span> Html</span>
                 ,  <span> Css</span>
                 , <span> Javascript</span>,
                  <span> React</span>, <span> Node.js</span>, <span> MongoDB</span>
                </p>

                
              </div>

              {/* Right Content - Profile Image */}
              <div className="col-lg-6 text-center">
              <div className="shadow-glow">
                <img
                  src="/Images/Home-image.jpg"
                  alt="Developer"
                  className="profile-image "
                />
                
                          <a href="#projects" className="btn btn-warning btn-lg mt-5 p-1 m-0">
                  View My Work                 <i class="bi bi-arrow-right-circle h1 text-info"></i>
                </a>      
                
                
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Advanced Topics Section */}
        <section id="advanced-topics" className="py-5 ">
          <div className="container">
            <h1 className="text-center fw-bold text-success">Advanced Topics</h1>
           <hr className="text-light" />
            <div className="row text-center mt-4">
              <div className="col-md-3 mt-2">
              <div className="card p-1 m-1 h-100 strip">
                           <i class="bi bi-code-slash h1  p-0 m-0 text-success "> </i>     
                <h5 className="text-primary card-header p-1 m-1 ">

                Performance Optimization</h5>
                <p>Using lazy loading, code splitting, and caching for high-speed applications.</p>
             </div>
              </div>
              <div className="col-md-3 mt-5">
                <div className="card p-1 m-1 h-100 strip">
               <i class="bi bi-shield-check text-success p-0 m-0"></i>
               
                <h5 className="text-primary card-header p-1 m-1">Security Best Practices</h5>
                <p>Implementing JWT, HTTPS, and data encryption for secure applications.</p>
             </div>
              </div>
              <div className="col-md-3 mt-5">
               <div className="card p-1 m-1 h-100 strip">
               
            <i class="bi bi-router p-0 m-0 text-success"></i>   
               
                <h5 className="text-primary card-header m-1 p-1">API Development</h5>
                <p>Building RESTful APIs with Node.js, Express, and GraphQL.</p>
             </div>
              </div>
              <div className="col-md-3 mt-5">
             <div className="card p-1 m-1 h-100 strip">
              
           <i class="bi bi-database-fill-lock p-0 m-0 text-success"></i>   
              
                <h5 className="text-primary card-header m-1 p-1">Database Optimization</h5>
                <p>Efficient indexing, query optimization, and database security.</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
<hr />
        {/* Footer */}

      </div>
    </>
  );
};

export default Canvas;
