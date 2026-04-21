import React from 'react'
import '../CssCodes/Services.css';
import { FaLaptopCode, FaBrain, FaDatabase, FaUsers, FaCode } from "react-icons/fa";

export default function Services() {
  return (
      <div >
          

          <div className="services-section">

      <div className="container text-center">

        <h1 className="services-title">Professional Services</h1>

        <p className="services-subtitle">
                      Custom website design built to deliver modern, scalable,
                      and effective business solutions.        </p>

        <div className="mt-4">
          <a href="/Contact" className="btn btn-primary custom-btn me-3">
            Get in Touch
          </a>

          <a href="/" className="btn btn-outline-dark custom-outline">
            View Portfolio
          </a>
        </div>

      </div>

          </div>
          {/* second sections   */}
    <div className="services-section2">
      <div className="container text-center">
        <h1 className="services-title">My Services</h1>
        <p className="services-subtitle">
                      I deliver high-quality, customized solutions
                      designed to meet your unique business requirements.        </p>

        <div className="row mt-5">

          {/* CARD 1 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <FaLaptopCode className="icon" />
              <h4>🌐Website Development</h4>
              <p>
                  Modern, responsive websites built for performance,
                  user experience, and business growth.     </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <FaBrain className="icon" />
              <h4>⚙️ Full Stack Web Applications</h4>
                <p>
                  Scalable web applications with secure backend systems and dynamic user interfaces.
                </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <FaDatabase className="icon" />
              <h4>🔧 Backend & API Development</h4>
              <p>
                  Robust and secure APIs to power applications with efficient data handling and authentication.
                </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <FaUsers className="icon" />
              <h4>🧾Business Automation Systems</h4>
              <p>
                  Custom solutions to automate workflows, manage data, and improve business efficiency.
                </p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="col-md-4 mb-4">
            <div className="service-card">
              <FaCode className="icon" />
              <h4>🎯Website Optimization & Fixing</h4>
              <p>
                  Improving performance, fixing bugs, and enhancing user experience of existing websites.
                </p>
            </div>
                      </div>
                       <div className="col-md-4 mb-4">
            <div className="service-card">
              <FaCode className="icon" />
              <h4>🎓Coaching & Mentorship</h4>
              <p>
                  Guidance in web development and backend systems with practical, project-based learning.
                </p>
            </div>
          </div>

        </div>
      </div>

          </div>
          {/* third section  */}

           <div className="contact-section text-center">

      <div className="container">

        {/* TOP CTA */}
        <h2 className="cta-title">
          Ready to transform your business?
        </h2>

        <p className="cta-subtitle">
            Let’s work together to bring your ideas to life.
          </p>

        <a href="/Contact" className="btn btn-primary cta-btn">
          Take a Look Here ?
        </a>

        {/* CONTACT */}
        <div className="mt-5">
           <button className='btn btn-success' >Get in Touch</button>
           <p className="contact-subtitle">
              Looking to build something impactful? Let’s get started.
            </p>
          <div className="contact-info d-flex justify-content-center flex-wrap gap-3 mt-3">
            <span className="contact-box text-bolder">dhirajupadhyay005@gmail.com</span>
            <span className="contact-box">+91 8130279213</span>
          </div>
        </div>

      </div>

    </div>




      </div>
  )
}
