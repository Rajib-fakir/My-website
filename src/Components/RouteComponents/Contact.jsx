import React, { useRef, useState } from "react";


const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setShowModal(true)
  };

  return (
    <div className="container  py-5 main" id="contact">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-3 text-light">Contact Me</h2>
          <p className="text-muted">
            I'm always open to discussing projects or just having a chat.
          </p>
        </div>
      </div>

      <div className="row g-4 p-2">
        {/* Contact Form */}
        <div className="col-md-7 ">
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
        <div className="col-md-5 mt-5">
          <div className="bg-light p-4 rounded shadow-sm">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-envelope-fill me-2 text-primary"></i>
                rajib01943075658.com
              </li>
              <li className="mb-3">
                <i className="bi bi-phone-fill me-2 text-primary"></i>
                +8801996973025
              </li>
              <li className="mb-3">
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                Dhaka,Bangladesh
              </li>
            </ul>
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
  );
};

export default Contact;
