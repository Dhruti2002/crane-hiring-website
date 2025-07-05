import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    alert('Message sent successfully!');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>Contact</h2>
            <ul>
              <li><Link to='/'>Home</Link> &nbsp;</li>
              <li>
                <i className="bi bi-gear fs-6 pe-2"></i>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contact-section py-5 my-5">
        <div className="container">
          <div className="section-title contact-title text-center mb-5">
            <h2 className="fw-bold">
              Get in touch with our <br /> lovely Team
            </h2>
          </div>

          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-6 contact-info d-flex flex-column justify-content-center">
              <div className="info-block d-flex mb-4">
                <div className="info-icon me-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-text">
                  <h5>Office Address</h5>
                  <p className="mb-0">Crane Hiring Network</p>
                  <p>Ahmedabad, Gujarat</p>
                </div>
              </div>

              <div className="info-block d-flex mb-4">
                <div className="info-icon me-3">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-text">
                  <h5>Phone Number</h5>
                  <p className="mb-0">+91 666 656 0000</p>
                  <p>+91 123 456 7890</p>
                </div>
              </div>

              <div className="info-block d-flex mb-4">
                <div className="info-icon me-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-text">
                  <h5>Email</h5>
                  <p className="mb-0">cranehiring@gmail.com</p>
                  <p>support@cranehire.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-3">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Type your message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold">
                  Send Message Now
                </button>
              </form>
            </div>
                <div className="contact-icons d-flex gap-3 mt-3">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
