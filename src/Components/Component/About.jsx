import React from "react";
import "../../../public/styles/About.css"; // কাস্টম স্টাইল

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}

<section className="about-content container">
  <div className="row align-items-center info-box stylish-box">
    <div className="col-lg-6 text-center">
      <div className="profile-img-wrapper">
        <img src="/Images/About-image.jpeg" alt="My Profile" className="profile-img" />
      </div>
    </div>
    <div className="col-lg-6 mt-5 text-box">
      <div className="card m-2 strip xx text-center">
              <i class="bi bi-alarm text-success"> </i>
        <h5 className="card-header mb-2 text-center text-primary">

        I’m a Web Developer</h5>
Passionate about crafting modern, user-friendly web experiences. I specialize in both frontend and backend development, striving to build responsive, high-performance websites that blend design and functionality seamlessly. Let's bring your ideas to life on the web.
      </div>
      
      
      
      
      
      
      
      <div className="card m-2 strip text-center">
        <p>
         <h2 className="card-header  text-center mb-2 text-primary">
         <i class="bi bi-patch-check-fill text-success"> </i>
         My passion </h2> <strong>creating dynamic, user-friendly, and visually appealing websites.</strong>
          I ensure high performance and responsive designs.
        </p>
      </div>
      <div className="card hire-card m-2 p-1">
        <a href="/contact" className="btn btn-gradient card-header h5 p-0 m-0">Hire Me <i class="bi bi-arrow-right "></i></a>
      </div>
    </div>
  </div>
</section>

      {/* About Content */}

<hr />
      {/* Skills Section */}
<section className="card my-skills-section m-2 p-2 rounded shadow-lg strip">
  <div className="card-body ">

    <h4 className="card-header text-center mb-3 text-primary">
    <i class="bi bi-diagram-3-fill h1 text-success">  </i> My Skills</h4>

    <div className="row text-center">
      <div className="col-md-3 text-info">
        <div className="skill-card-3d strip p-2">
          <i className="bi bi-code-slash skill-icon-3d"></i>
          <h5>Frontend Development</h5>
        </div>
      </div>
      <div className="col-md-3 text-info">
        <div className="skill-card-3d strip p-2">
          <i className="bi bi-server skill-icon-3d"></i>
          <h5>Backend Development</h5>
        </div>
      </div>
      <div className="col-md-3 text-info text-center">
        <div className="skill-card-3d strip p-2">
          <i className="bi bi-brush skill-icon-3d"></i>
          <h5>UI/UX Design</h5>
        </div>
      </div>
      <div className="col-md-3 text-info">
        <div className="skill-card-3d strip p-2 ">
          <i className="bi bi-bar-chart skill-icon-3d"></i>
          <h5>SEO & Performance</h5>
        </div>
      </div>
    </div>
  </div>
</section>

<hr />
      {/* Footer */}

    </div>
  );
};

export default About;
