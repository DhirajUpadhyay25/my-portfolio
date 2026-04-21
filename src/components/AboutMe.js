import React from "react";
import { FaEnvelope, FaPhone,  FaGlobe, FaLinkedin, FaGithub,  } from "react-icons/fa";
import removedbg from '../Photos/removedbg.png'
import { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaTools } from "react-icons/fa";
import '../CssCodes/Aboutme.css';
import clz from '../Photos/clz.png'
import lba from '../Photos/lba.jpg'
import '../CssCodes/Tabs.css';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <div className=" mt-4">

    <section className="hero-banner">

      <div className=" hero-content w-100 ">

        {/* LEFT IMAGE */}
      <div className="col-lg-3 col-md-8 mt-5 mt-lg-1">
      <div className="hero-image-container1">
    
     <div className="circle-bg1">
      <img
        src={removedbg}
        alt="profile"
        className="profile-img bg-warning"
      />
    </div>

  </div>
    </div>

        {/* RIGHT CONTENT */}
        <div className="hero-text">
          <h1 className="hero-title">Dhiraj Upadhyay</h1>

          <p className="hero-subtitle fw-bold text-dark">
            Full Stack Developer | Java | Spring Boot | React
          </p>

          <div className="hero-buttons d-flex flex-wrap justify-content-around ">

               <a href="https://www.linkedin.com/in/dhiraj-upadhyay2060/" target="_new" className="hero-btn bg-dark">
              <FaLinkedin /> LinkedIn
            </a>


            <a href="mailto:dhirajupadhyay005@email.com" target="_new" className="hero-btn bg-dark">
              <FaEnvelope /> Email
            </a>
              
               <a href="https://github.com/DhirajUpadhyay25" target="_new" className="hero-btn bg-dark">
              <FaGithub /> GitHub
              </a>
              
            <a href="tel:+91 8130279213" target="_new" className="hero-btn bg-dark">
              <FaPhone /> Call
            </a>

          </div>
        </div>
      </div>
      </section>

      
      {/* Tab Sections  */}
       <section className="container my-5">

      {/* TAB NAVBAR */}
      <div className="tab-nav d-flex flex-wrap justify-content-center gap-5 mb-5">
        
        <button
          className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <FaGraduationCap /> Education
        </button>

          
           <button
          className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")} >
          <FaTools /> Skills
          </button>

        <button
          className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")} >
          <FaBriefcase /> Experience
        </button>

        <button
          className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          <FaCode /> Projects
        </button>

       
          <button
          className={`tab-btn ${activeTab === "Certifications" ? "active" : ""}`}
          onClick={() => setActiveTab("Certifications")} >
          <FaTools /> Certifications
          </button>
          <button
          className={`tab-btn ${activeTab === "Contact" ? "active" : ""}`}
          onClick={() => setActiveTab("Contact")} >
          <FaTools /> Contact
        </button>

      </div>

      {/* CONTENT */}
      <div className="tab-content">

        {activeTab === "education" && (
          
       <section className="education-section container my-5">

      {/* Title */}
      <h2 className="edu-title">
        <FaGraduationCap className="icon" /> Education
      </h2>

      <div className="row g-4 mt-3">

        {/* CARD 1 */}
        <div className="col-lg-6 col-md-12">
          <div className="edu-card">

                    <h3 className="fw-700" >Bachelor of Technology in Computer Science And Engineering(B.Tech.CSE)</h3>
                    <p className="text-muted">NGF College of Engg & Technology, 
                     Affilated By <strong> J.C. Bose University of Science and
                    Technology, YMCA Faridabad, Haryana</strong> </p>
                    
               <p><strong>Aggregate:</strong>75% (7.5 CGPA)</p>
               <p className="text-dark fw-bolder">Graduating in <strong>2027</strong> </p>
                <div className="edu-img">
               <a href="https://ngfcet.com/" target="_blank" rel="noopener noreferrer">
              <img src={clz} alt="NGF College" />
             </a>
            </div>

          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-lg-6 col-md-12">
          <div className="edu-card">

            <h4>Class XII</h4>
            <p className="text-dark fw-bolder">Little Buddha Academy MNR kanchanpur</p>
            <p><strong>National Examination Board (NEB) : </strong> 85%</p>
            <p className="text-secondary">Completed in 2021</p>

            <div className="edu-img mt-5">
              <img src={lba} alt="School" />
            </div>

          </div>
        </div>

      </div>
    </section>
        )}

        {activeTab === "experience" && (
            <div className="fade-in">
                 <h2 className="tech-title">
               Experience</h2>
            <div className="info-card w-50">
                {/* <h4 className="text-muted">No Experience in Technical Field </h4> */}
                <div class="spinner-border text-warning" role="status">
                  
                </div>
                <span className="fs-3 m-3 text-dark fw-bolder">Working...</span>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
            <div className="fade-in">
            <div className="info-card d-flex justify-content-center"> 
       <div className="text-center">
        <a href="Project">
        <button className="view-btn">
        View All Projects <span className="arrow">&gt;&gt;&gt;</span>
        </button> </a>
        </div>
            </div>
          </div>
          )}
          {/* Skills Area  */}
          
          {activeTab === "skills" && (
            

      <section className="tech-section container mt-1">
      <h2 className="tech-title">
       <FaCode /> Technical Skills</h2>
        
      <div className="row g-4 mt-3">
        {/* Languages */}
        <div className="col-lg-6">
          <div className="tech-card">
            <h4>Languages</h4>
            <div className="tech-tags">
              <span className="tag">☕ Java  (DSA, OOPS)</span>
              <span className="tag">💻C & C++</span>
              <span className="tag">⚡JavaScript</span>
            </div>
          </div>
        </div>

        {/* Libraries */}
        <div className="col-lg-6">
          <div className="tech-card">
            <h4>Libraries</h4>
            <div className="tech-tags">
              <span className="tag">⚛️ React.js</span>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="col-lg-6">
          <div className="tech-card">
            <h4>Frameworks & Tools</h4>
            <div className="tech-tags">
            <span className="tag">🌱 Spring Boot</span>
              <span className="tag">🧩 Spring MVC</span>
              <span className="tag">🗄️ Hibernate</span>
              <span className="tag">🎨 Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Web */}
        <div className="col-lg-6">
          <div className="tech-card">
            <h4>Web Technologies</h4>
            <div className="tech-tags">
              <span className="tag">🌐 HTML</span>
              <span className="tag">🎨 CSS</span>
              <span className="tag">⚛️ React.js</span>
            </div>
          </div>
        </div>

        {/* Other */}
        <div className="col-6">
          <div className="tech-card">
                    <h4>Databases</h4>
                    
                    <div className="tech-tags">
                      
                      <span className="tag">MySQL</span>
                      <span className="tag">Oracle</span>
                      <span className="tag">postgresql</span>


                
            </div>
          </div>
          
           </div>
           <div className="col-6">
           <div className="tech-card">
            <h4>Other Skills</h4>
            <div className="tech-tags">
            <span className="tag">🧠Problem-solving</span>
              <span className="tag">🧠Creative-Thinking</span>
              <span className="tag">👑Leadership</span>
              <span className="tag">🤝Team Collaboration</span>
            </div>
          </div>
        </div>

      </div>
    </section>

            
            
            
        )}

        {activeTab === "Certifications" && (
            <div className="fade-in">
               <h2 className="tech-title">
               Certifications</h2>
            <div className="info-card">
              <p>Certifications</p>
            </div>
            </div>
            
          )}

          {/* Contact Info  */}

           {activeTab === "Contact" && (
         <section className="contact-section container my-5">

      <h2 className="contact-title">
        <FaEnvelope /> Contact Information
      </h2>

      <div className="row g-4 mt-3">

        {/* Phone */}
        <div className="col-lg-6">
          <a href="tel:+917453966532" className="contact-card">
            <div className="icon-box"><FaPhone /></div>
            <div>
              <h5>Phone</h5>
              <p>+91 8130279213</p>
            </div>
          </a>
        </div>

        {/* Email */}
        <div className="col-lg-6">
          <a href="mailto:dhirajupadhyay005@gmail.com" className="contact-card">
            <div className="icon-box"><FaEnvelope /></div>
            <div>
              <h5>Email</h5>
              <p>dhirajupadhyay005@gmail.com</p>
            </div>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="col-lg-6">
          <a href="https://www.linkedin.com/in/dhiraj-upadhyay2060/" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon-box"><FaLinkedin /></div>
            <div>
              <h5>LinkedIn</h5>
              <p className="link-text">Connect with me</p>
            </div>
          </a>
        </div>

        {/* GitHub */}
        <div className="col-lg-6">
          <a href="https://github.com/DhirajUpadhyay25" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon-box"><FaGithub /></div>
            <div>
              <h5>GitHub</h5>
              <p className="link-text">View my projects</p>
            </div>
          </a>
        </div>

        {/* Portfolio */}
        <div className="col-lg-6">
          <a href="/" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon-box"><FaGlobe /></div>
            <div>
              <h5>Portfolio</h5>
              <p className="link-text">Visit website</p>
            </div>
          </a>
        </div>

        {/* LeetCode */}
        <div className="col-lg-6">
           <a href="https://leetcode.com/u/dhiraj202025/" target="_blank" rel="noreferrer" className="contact-card">
               <div className="icon-box"><FaCode /></div>
               <div>
               <h5>LeetCode</h5>
               <p className="link-text">View profile</p>
               </div>
               </a>
               </div>
              </div>
            </section>)}
          
      </div>
    </section>
 </div>
  );
};

export default AboutMe;