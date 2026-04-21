import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import myphoto1 from '../Photos/myphoto1.png'

import { Link } from "react-router-dom";
// Skills imports
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import p1 from '../Photos/p1.png'
import '../CssCodes/Myprojectss.css';
import p3 from '../Photos/p3.png'
import p4 from '../Photos/p4.png'
import '../CssCodes/Hero.css';

// its Css is : hero.css

import {
  FaCode,
  FaPalette,
  FaDatabase,
} from "react-icons/fa";


const skill = [
  { name: "MySQL", icon: <FaDatabase />, color: "blue" },
  { name: "React.js", icon: <FaReact />, color: "blue" },
  { name: "Java ", icon: <FaJava />, color: "blue" },
  { name: " JavaScript", icon: <FaCode />, color: "red" },
  { name: " C ", icon: <FaCode />, color: "red" },
  { name: " C++", icon: <FaCode />, color: "red" },
  { name: "UI/UX Design", icon: <FaPalette />, color: "purple" },
  { name: "Spring Framework", icon: <BiLogoSpringBoot />, color: "green" },
  { name: "Spring Boot", icon: <BiLogoSpringBoot />, color: "green" },
  { name: "Spring AI", icon: <BiLogoSpringBoot />, color: "green" },
  { name: " REST API", icon: <FaCode />, color: "red" },
    { name: "Cloud Computing", icon: <FaDatabase />, color: "blue" },

  


];


const Portfolio = () => {
  return (
    <div className=' text-dark  mt-4 p-3 '>
      
    <section className="hero-section container-fluid d-flex  align-items-center">
      <div className="container ">
        <div className="row  align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <span className="badge bg-dark mb-3 px-3 py-2">
                Open to Work </span>
              
            <h1 className="hero-title">
              Hi, I am{" "}
              <span className="highlight">
                <TypeAnimation
                  sequence={[
                    "Dhiraj Upadhyay",
                    2000,
                    " A Java Developer ",
                     2000 ,
                    "UI/UX Designer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}/></span></h1>

            <h4 className="hero-subtitle1">
              Full-Stack Developer & UI/UX Designer
            </h4>

             <p className="hero-desc">
                I design and develop modern, high-performing websites and applications that
                deliver seamless user experiences and drive real business growth.
            </p>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
             
                <Link to="/Project" className="btn btn-dark px-4 py-2 fw-bolder ">View My Projects</Link> 
                
               <Link className=" btn btn-outline-secondary px-4 py-2 fw-bolder btn-fill" to="/Contact">Contact Me</Link>
            </div>

            <div className="social-icons mt-4">
              <a href="https://github.com/DhirajUpadhyay25" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dhiraj-upadhyay2060/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.linkedin.com/in/dhiraj-upadhyay2060/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>
          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
            <div className="hero-image-container image-container d-flex justify-content-center">
            <div className="circle-bg object-fit-cover">
            <img src={myphoto1} alt="profile" className="profile-img zoom-img" /> </div>

          </div>
          </div>

        </div>
      </div>
      </section>

      {/* Second part of Photo section  will add if needed */}
      
  {/* Skill section ....... */}


 <section className="skills-section container text-center" id="Skills">
      
      <span className="badge bg-dark px-3 py-2 mb-3">
        Knowledge About 
      </span>

      <h2 className="skills-title">Skills And Technologies</h2>

      <p className="skills-desc fs-5">
          As a Full-Stack Developer and UI/UX Designer,
          I create scalable, user-focused digital products that
          combine clean design with powerful performance.
      </p>

      <div className="row mt-5 g-4">
        {skill.map((skill, index) => (
          <div key={index} className="col-lg-3 col-md-6">
            <div className={`skill-card ${skill.color}`}>
              
              <div className="icon-circle">
                {skill.icon}
              </div>

              <h5>{skill.name}</h5>

            </div>

          </div>
        ))}
      </div>

      </section>
      
      {/* projects sections */}
      <div className=" text-center mt-0">
       <span className="badge bg-dark px-3 py-2 mb-3">
       Projects
      </span>

      <h2 className="fw-700 "> New Featured Projects</h2>

      <p className="skills-desc fs-5">
        A showcase of my recent work, reflecting my skills in building modern and impactful applications.
        </p>
        </div>
      {/* projects here */}
        <div className=" container projects-grid mt-5">
              
                  <div className="project-card container">
                            <a href='/' target='_new'>
                            <div className="img-box">
                            <img src={p3} alt="e-commerece" className='img1'/>
                            </div>
                           </a>
                         
          <div className="card-body m-4">
              <div className='d-flex justify-content-between'>
                <h3>Customer Relationship Management System (CRM)</h3>
                <span className='text-muted btn text-center'>2025</span>
                   </div>
                             <p className=" text-muted text-bolder wf-500">
                             Developed a CRM application using Spring Boot and REST APIs, with MySQL database integration for structured data handling and Razorpay API for online payment functionality, emphasizing performance, security, and scalability.
                             </p>
                             <div className="tags">
                             <span>Java/Spring</span>
                             <span>Spring Boot</span>
                             <span>Spring MVC </span>
                             <span>REST API</span>
                             <span>RazorPay API</span>
                             <span>MYSQl/SQL</span>
               
                             </div>
                             <div className='d-flex justify-content-between'>
                             <a href="https://github.com/DhirajUpadhyay25" target='_new' className="btn-fill">View Project</a>
                             <a href="https://github.com/DhirajUpadhyay25" target='_new' className="btn-fill">View Details</a>
                             </div>
                            </div>
                       </div>
               
                       {/* CARD 2 */}
                        <div className="project-card container">
                            <a href='/' target='_new'>
                            <div className="img-box">
                            <img src={p1} alt="e-commerece" className='img1'/>
                            </div>
                           </a>
                         
                <div className="card-body m-4">
               <div className='d-flex justify-content-between'>
                 <h3>E-commerce Web Platform</h3>
                <span className='text-muted btn text-center '>2026</span>
                   </div>
                             <p className=" text-muted text-bolder wf-500">
                             Developed a full-featured E-Commerce web platform using Java,
                             Spring Boot, and REST APIs, supporting product listings, user
                             authentication, cart management, and secure order processing.
                             </p>
                           <div className="tags">
                             <span>Java/Spring Core</span>
                             <span>Spring Boot</span>
                             <span>REST ApI</span>
                             <span>Spring Security</span>
                             <span>Hibernate/JPA</span>
                            <span>CSS</span>
                             <span>MySql/SQL</span>
                             <span>ThymeLeaf/HTML</span>
                              <span>BootStrap</span>
                             </div>
                             <div className='d-flex justify-content-between'>
                             <a href="https://github.com/DhirajUpadhyay25" target='_new' className="btn-fill">View Project</a>
                             <a href="https://github.com/DhirajUpadhyay25" target='_new' className="btn-fill">View Details</a>
                             </div>
                            </div>
                            </div>
        
        
               
                       {/* CARD 3 */}
                        <div className="project-card container">
                            <a href='/' target='_new'>
                            <div className="img-box">
                            <img src={p4} alt="e-commerece" className='img1'/>
                            </div>
                           </a>
                         
          <div className="card-body m-4">
             <div className='d-flex justify-content-between'>
               <h3>CRUD Web </h3>
                   </div>
                             <p className=" text-muted text-bolder wf-500">
                             Built a CRUD application using Spring Boot, REST APIs, Hibernate, JPA,
                             and MySQL, showcasing strong understanding of backend development,
                             data handling, and database integration.
                             </p>
                           <div className="tags">
                            <span>Spring MVC</span>
                             <span>Spring Boot</span>
                             <span>REST APIs</span>
                             <span> Hibernate/ JPA</span>
                             <span> MySQL/SQL</span>
                             <span>ThymeLeaf</span>
               
               
                             </div>
                             <div className='d-flex justify-content-between'>
                             <a href="https://github.com/DhirajUpadhyay25/CRUD-operations-SB" target='_new' className="btn-fill">View Project</a>
                             <a href="https://github.com/DhirajUpadhyay25/CRUD-operations-SB" target='_new' className="btn-fill">View Details</a>
                             </div>
                            </div>
                       </div>
      </div>
      <div className="text-center mt-5 container">
          <Link className="nav-link" to="/Project">
          <button className="view-btn">
            View All Projects <span className="arrow">&gt;&gt;&gt;</span>
            </button> 
            </Link>
        </div>

      {/* final btn */}

      <div className="cta-container">

      <div className="cta-box">

        <span className="cta-badge">Let us Connect</span>

        <h1> &lt;&lt; Ready to Start Your Project &gt;&gt;</h1>

        <div className="cta-buttons">
          <a href="mailto:dhirajupadhyay005@gmail.com" className="btn primary">
           <button className="btn-fill"> Get in Touch <span>✉</span></button>
          </a>
                <Link className="nav-link" to="/Services">
              <button className="btn-fill"> View My Services <span className="arrow">→</span>
           </button>
         </Link>
        </div>

      </div>

    </div>
  
      </div>
  );
};

export default Portfolio;