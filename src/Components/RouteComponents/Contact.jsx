import React, { useRef, lazy, useState } from "react";

const Seo = lazy(() => import("../../../Seo.jsx"));

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <Seo 
        title="Contact Rajib Fakir | Hire Professional Full Stack Web Developer"
        keywords="Contact Rajib Fakir, Hire Full Stack Developer, Freelance Web Developer Bangladesh, Web Development Contact, Project Inquiry, Hire Developer Bangladesh, Custom Website Solutions, Professional Web Development, Full Stack Development Services"
        path="/contact"
        description="Get in touch with Rajib Fakir — a professional Full Stack Web Developer from Bangladesh. Contact via email, WhatsApp, Facebook, or direct phone call for innovative, high-quality web solutions."
      />

      {/* Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rajib Fakir",
          "url": "https://yourwebsite.com/contact",
          "email": "rajib01943075658@gmail.com",
          "telephone": "+8801996973025",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhaka",
            "addressCountry": "Bangladesh"
          },
          "sameAs": [
            "https://facebook.com/yourfacebookid",
            "https://wa.me/8801996973025",
            "mailto:rajib01943075658@gmail.com"
          ]
        })}
      </script>

      <div className="container py-5 main" id="contact">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3 text-light">Contact Me</h2>
            <p className="text-muted">
              I'm always open to discussing projects, ideas, or just having a chat!
            </p>
          </div>
        </div>

        <div className="row g-4 p-2">
          {/* Contact Form */}
          <div className="col-md-7">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="form-control"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="reply_to"
                  className="form-control"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Let's Talk!"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary px-4">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            <div className="bg-light p-4 rounded shadow-sm h-100 d-flex flex-column justify-content-between">
              <div>
                <h5 className="fw-bold mb-2">Contact Info                 <hr /> </h5>
                <ul className="list-unstyled mb-4 p-0 list-contact">
                  <li className="mb-2 ">
                    <i className="bi bi-envelope-fill me-2 text-primary h4"></i>
                    <a href="mailto:rajib01943075658@gmail.com" className="text-decoration-none text-dark">
                      rajib01943075658@gmail.com
                    </a>
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-phone-fill me-2 h4 text-primary"></i>
                    <a href="tel:+8801996973025" className="text-decoration-none text-dark">
                      +8801996973025
                    </a>
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-geo-alt-fill h4 me-2 text-primary"></i>
                    <a href="https://goo.gl/maps/your-google-map-link" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                      Dhaka, Bangladesh
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="d-flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=100092192364083" target="_blank" rel="noopener noreferrer" className="text-primary fs-4">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://wa.me/8801600299821" target="_blank" rel="noopener noreferrer" className="text-success fs-4">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="mailto:rajib01943075658@gmail.com" className="text-danger fs-4">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showModal && (
          <div
            className="modal show d-block fade"
            tabIndex="-1"
            role="dialog"
            onClick={() => setShowModal(false)}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content border-0 shadow">
                <div className="modal-header bg-success text-white">
                  <h5 className="modal-title">Message Sent!</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Thank you for contacting me. I’ll get back to you soon!</p>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={() => setShowModal(false)}
                    className="btn btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
