import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../CssCodes/Footer.css';

export default function Footer() {
    return (
        <>
    <footer class="footer-section mt-5">
     <div class="container">
    <div class="row text-start">
      <div class="col-md-6 col-6">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <div className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center me-2"
              style={{ width: "35px", height: "35px" }}>
             DU
            </div>
            Dhiraj Upadhyay
                </Link>
                <ul className="list-unstyled footer-links">
                  <p>A full-stack developer building
                    scalable web applications.</p>
                  
                  <h5 class="footer-title">Follow Me</h5>
                  <li>
                    <div className="social-icons mt-2">
                     <a href="https://github.com/DhirajUpadhyay25" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                     <a href="https://www.linkedin.com/in/dhiraj-upadhyay2060/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                     <a href="/abc"><FaTwitter /></a>
                    </div>
                    </li>
        </ul>
      </div>

      <div class="col-md-3 col-6">
        <h5 class="footer-title">Quick Links</h5>
        <ul class="list-unstyled footer-links">
           <li className="nav-item">
                <Link className="nav-link" to="/AboutMe">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#Skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Project">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
        </ul>
      </div>

      <div class="col-md-3 col-6 mt-4 mt-md-0">
        <h5 class="footer-title">Contact Me</h5>
        <ul class="list-unstyled footer-links">
          <li>Email:dhirajupadhyay005@gmail.com</li>
          <li>mobile No.: +91 8130279213</li>
        </ul>
      </div>

<hr></hr>
    </div>
    <div class="footer-bottom text-center ">
     ©2026 Dhiraj Upadhyay. All Rights Reserved.
            </div>
  </div>
</footer>
        
        </>
  
  )
}
