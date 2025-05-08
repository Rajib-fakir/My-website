import React, { useRef, lazy, useState } from "react";

const Seo = lazy(() => import("../../../Seo.jsx"));

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      email: formData.get("reply_to"),
      name: formData.get("from_name"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://portfoli-server-1.onrender.com/Comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowModal(true);
        form.current.reset();
      } else {
        console.error("Server error:", await response.text());
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <Seo 
        title="Contact Rajib Fakir | Hire Professional Full Stack Web Developer"
        keywords="Contact Rajib Fakir,রাজিব,রাজিব ফকির,রাজিব হাসান,ফকির,রাজিব ওয়েব ডেভেলপার,rajib,fakir Hire Full Stack Developer, Freelance Web Developer Bangladesh, Web Development Contact, Project Inquiry, Hire Developer Bangladesh, Custom Website Solutions, Professional Web Development, Full Stack Development Services"
        path="/contact"
        description="Get in touch with Rajib Fakir — a professional Full Stack Web Developer from Bangladesh. Contact via email, WhatsApp, Facebook, or direct phone call for innovative, high-quality web solutions."
      />


      <div className="container py-5 w-100 overflow-hidden" id="contact">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Let's Get in Touch</h2>
          <p className="text-muted">
            I'm always open to discussing projects, collaborations, or freelance opportunities.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <h5 className="mb-4 text-primary">Send Me a Message</h5>
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
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            <div className="card bg-light shadow-sm border-0 h-100">
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="text-primary mb-3">Contact Information</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-envelope-fill me-2 text-primary fs-5"></i>
                      <a href="mailto:rajib01943075658@gmail.com" className="text-dark text-decoration-none">
                        
                      </a>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-phone-fill me-2 text-primary fs-5"></i>
                      <a href="tel:+8801996973025" className="text-dark text-decoration-none">
                        +8801996973025
                      </a>
                    </li>
                    <li className="mb-3 d-flex align-items-center">
                      <i className="bi bi-geo-alt-fill me-2 text-primary fs-5"></i>
                      <a href="https://www.google.com/maps/embed/v1/place?q=%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BE%E0%A6%87%E0%A6%B0%20%E0%A6%AC%E0%A6%BF%E0%A6%B2&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                        Dhaka, Bangladesh
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex gap-3 mt-3">
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
        </div>

<div className="m-1 p-1">
<hr className="text-light bg-light"/>
<iframe
      width="100%"
      height="200px"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?q=%E0%A6%86%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BE%E0%A6%87%E0%A6%B0%20%E0%A6%AC%E0%A6%BF%E0%A6%B2&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      title="Andair Bill Location"
    ></iframe>
</div>



        {/* Success Modal */}
        {showModal && (
          <div className="modal show d-block fade" tabIndex="-1" role="dialog" onClick={() => setShowModal(false)}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content border-0 shadow">
                <div className="modal-header bg-success text-white">
                  <h5 className="modal-title">Message Sent!</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Thank you for contacting me. I’ll get back to you soon!</p>
                </div>
                <div className="modal-footer">
                  <button onClick={() => setShowModal(false)} className="btn btn-secondary">
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
