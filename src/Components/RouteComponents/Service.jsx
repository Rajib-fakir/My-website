import React, { lazy } from "react";

const Seo = lazy(() => import("../../../Seo.jsx"));

const ServicePage = () => {
  const services = [
    {
      title: "Web Development",
      icon: "bi-code-slash",
      desc: "Custom websites and web apps built with modern frameworks. Fast, secure, and scalable digital experiences.",
    },
    {
      title: "UI/UX Design",
      icon: "bi-palette",
      desc: "Intuitive user interfaces and seamless user experiences that make your brand stand out.",
    },
    {
      title: "SEO Optimization",
      icon: "bi-graph-up-arrow",
      desc: "Drive traffic and improve search rankings with proven SEO strategies tailored to your business.",
    },
    {
      title: "E-Commerce Solutions",
      icon: "bi-cart4",
      desc: "Launch your online store with powerful e-commerce tools and a sleek shopping experience.",
    },
    {
      title: "Mobile App Development",
      icon: "bi-phone",
      desc: "Cross-platform mobile apps with beautiful interfaces and great performance.",
    },
    {
      title: "Cloud Integration",
      icon: "bi-cloud-upload",
      desc: "Seamlessly migrate and manage your infrastructure with modern cloud services.",
    },
  ];

  return (
    <>
      <Seo 
        title="Services || Rajib Fakir - Professional Web Development & Digital Solutions"
        keywords="Rajib Fakir, Web Development Services, UI UX Design, SEO Optimization, E-Commerce Solutions, Mobile App Development, Cloud Integration, Full Stack Developer Bangladesh, Freelance Web Developer, Custom Web Solutions, Hire Web Developer, Modern Web Development"
        path="/services"
        description="Discover the full range of services offered by Rajib Fakir. From custom web development, UI/UX design, SEO optimization, e-commerce solutions to mobile apps and cloud integration — we help you transform your digital presence with innovative, high-quality solutions."
      />

      <div className="text-success">
        <section className="container py-5">
          <div className="text-center mb-5">
            <h1 className="fw-bold">What We Offer</h1>
            <p className="text-muted fs-5">
              Explore our range of services designed to grow your business and enhance your digital presence.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i className={`bi ${service.icon} fs-1 text-primary mb-3`}></i>
                    <h5 className="card-title fw-semibold">{service.title}</h5>
                    <p className="card-text text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary text-white text-center py-5">
          <div className="container">
            <h2 className="fw-bold">Ready to Start Your Project?</h2>
            <p className="fs-5 mb-4">
              Let’s build something amazing together. Reach out to discuss your vision.
            </p>
            <a href="/contact" className="btn btn-light btn-lg px-4">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicePage;
