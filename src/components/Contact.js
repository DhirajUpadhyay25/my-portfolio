import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import '../CssCodes/Contact.css';

export default function Contact() {
  return (
        <>        
      <section className="contact-hero ">
        
      <div className="hero-content">
        {/* Circle Initial */}
        <div className="hero-avatar">
        DU
        </div>

        {/* Name */}
        <h1 className="hero-name">
         Dhiraj Upadhyay
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Let’s build something amazing together.  
          Feel free to reach out through any platform below.
        </p>

      </div>

      </section>
      
      {/* Form section of second  */}

     <div className="contact-container">

      {/* LEFT CARD */}
      <div className="card">
        <h2 className="title">Contact Details</h2>

        <div className="item">
          <FaMapMarkerAlt className="icon purple" />
          <div>
            <h4>Location</h4>
            <p>Faridabad,Haryana</p>
          </div>
        </div>

        <div className="item">
          <FaPhoneAlt className="icon blue" />
          <div>
            <h4>Phone</h4>
            <p>+91 8130279213</p>
          </div>
        </div>

        <div className="item">
          <FaEnvelope className="icon violet" />
          <div>
            <h4>Email</h4>
            <p>dhirajupadhyay005@gmail.com</p>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="card">
        <h2 className="title">Social Profiles</h2>

        <a href="https://www.linkedin.com/in/dhiraj-upadhyay2060/"  target='_new' className="item link">
          <FaLinkedin className="icon blue" />
          <div>
            <h4>LinkedIn</h4>
            <p> dhiraj-upadhyay2060</p>
          </div>
          <span className="dot"></span>
        </a>

        <a href="https://github.com/DhirajUpadhyay25"  target='_new' className="item link">
          <FaGithub className="icon dark" />
          <div>
            <h4>GitHub</h4>
            <p>DhirajUpadhyay25</p>
          </div>
          <span className="dot"></span>
        </a>

        <a href="https://leetcode.com/u/dhiraj202025/"  target='_new' className="item link">
          <FaCode className="icon orange" />
          <div>
            <h4>LeetCode</h4>
            <p>dhiraj202025</p>
          </div>
          <span className="dot"></span>
        </a>
      </div>

      {/* BUTTON */}
  

      </div>
      <div className='d-flex justify-content-center'>
        <a href='mailto:dhirajupadhyay005@gmail.com' target='_new' className='contact-btn text-decoration-none'> ✉ Get In Touch</a>
        
      
        
        </div>

            
    </>
  )
}
