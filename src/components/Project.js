import React from 'react'
import '../CssCodes/Myprojectss.css';
import p1 from '../Photos/p1.png'
import p2 from '../Photos/p2.png'
import p3 from '../Photos/p3.png'
import p4 from '../Photos/p4.png'
import p5 from '../Photos/p5.png'
import p6 from '../Photos/p6.png'
import pt from '../Photos/pt.png'

export default function Project() {
  return (
    <>
     <div className="projects-container">
      <div className="projects-content">
        <h1>My Projects</h1>
        <p className="subtitle">
            A curated portfolio of projects highlighting my skills in frontend and
            backend development, data structures, and building scalable, user-focused applications.
        </p>
      </div>
      </div>
      {/* Projects name  */}
      
      <div className=' mt-0 fw-500 container d-flex justify-content-center
       bg-dark text-light border 
      rounded-bottom-circle text-center'>
       <h3 className='text-light fw-500 text-center fs-5'>Web Development And Software Projects </h3>
      </div>
      {/* divs  here  */}

        <div className=" container projects-grid mt-5">
        
            {/* CARD 1 */}
            <div className="project-card container">
             <a href='/' target='_new'>
             <div className="img-box">
             <img src={p3} alt="e-commerece" className='img1'/>
             </div>
            </a>
          
          <div className="card-body m-4">
            <div className='d-flex justify-content-between'>
              <h3>Customer Relationship Management System (CRM) </h3> 
              <span className='text-muted btn text-center '>2025</span>
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
              <span className='text-muted btn'>2025</span>
              </div>
              <p className=" text-muted text-bolder wf-500">
              Built a CRUD (Create, Read, Update, Delete) application using Spring Boot, REST APIs, Hibernate, JPA,
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


     {/* CARD 1 */}
            <div className="project-card container">
              <a href='/' target='_new'>
              <div className="img-box">
              <img src={p2} alt="e-commerece" className='img1'/>
              </div>
              </a>
            
          <div className="card-body m-4">
             <div className='d-flex justify-content-between'>
                <h3>Personal Portfolio</h3>
              <span className='text-muted btn text-center '>2026</span>
              </div>
                <p className=" text-muted text-bolder wf-500">
                Created responsive and dynamic web projects using React.js, HTML5,
                CSS3, and Bootstrap, emphasizing reusable components, clean code, and modern UI/UX.
                </p>
                <div className="tags">
                <span>React.js</span>
                <span>HTML5/CSS3</span>
              <span>Bootstrap</span>
               <span>FlexBox/grid Layouts</span>

                </div>
                <div className='d-flex justify-content-between'>
                <a href="/" className="btn-fill">Visit Project</a>
                <a href="https://github.com/DhirajUpadhyay25" target='_new' className="btn-fill">View Details</a>
                </div>
              </div>
        </div>
        
                     {/* Card 2.1 */}
                 <div className="project-card container">
                                    <a href='/' target='_new'>
                                    <div className="img-box">
                                    <img src={pt} alt="e-commerece" className='img1'/>
                                    </div>
                                   </a>
                                 
                        <div className="card-body m-4">
                       <div className='d-flex justify-content-between'>
                         <h3>To-D0o-List App </h3>
                        <span className='text-muted btn text-center '>2026</span>
                           </div>
                                     <p className=" text-muted text-bolder wf-500">
                      Built a My TODoList app using Spring Boot with Database and REST API.implemented CRUD (Create, Read, Update, Delete) operations on application where users can manage tasks. JpaRepository interface is used to communicate with Databases.
                      
                                     </p>
                                   <div className="tags">
                                     <span>Java/Spring Core</span>
                                     <span>Spring Boot</span>
                                     <span>REST ApI</span>
                                     <span>Hibernate/JPA</span>
                                    <span>CSS</span>
                                     <span>MySql/SQL</span>
                                     <span>ThymeLeaf/HTML</span>
                                      <span>BootStrap</span>
                                     </div>
                                     <div className='d-flex justify-content-between'>
                                     <a href="https://github.com/DhirajUpadhyay25/MyToDoApp_springBoot" target="_new" className="btn-fill">View Project</a>
                                     <a href="https://github.com/DhirajUpadhyay25/MyToDoApp_springBoot" target="_new" className="btn-fill">View Details</a>
                                     </div>
                                    </div>
                               </div>

        {/* CARD 2 */}
        <div className="project-card container">
             <a href='/' target='_new'>
             <div className="img-box">
             <img src={p5} alt="e-commerece" className='img1'/>
             </div>
            </a>
          
          <div className="card-body m-4">
            <div className='d-flex justify-content-between'>
              <h3>Weather API Application</h3>
              <span className='text-muted btn text-center '>2024</span>
              </div>
              <p className=" text-muted text-bolder wf-500">
              Created a Weather App using JavaScript and API integration,
              showcasing real-time data fetching, DOM manipulation,
              and responsive UI design.
              </p>
              <div className="tags">
              <span>JavaScript</span>
              <span>React.JS</span>
              <span>Api integration</span>
               <span>HTML5/CSS3</span>

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
             <img src={p6} alt="e-commerece" className='img1'/>
             </div>
            </a>
          
          <div className="card-body m-4">
             <div className='d-flex justify-content-between'>
              <h3>Swiggy Clone</h3>
              <span className='text-muted btn text-center '>2024</span>
              </div>
              <p className=" text-muted text-bolder wf-500">
              Implemented a Swiggy Clone UI using HTML and CSS, demonstrating
              expertise in layout design, Flexbox  and Grid design,
              </p>
              <div className="tags">
              <span>HTML/CSS</span>
              <span>FlexBox/Grid</span>
              <span> Frontend Designing</span>
              </div>
              <div className='d-flex justify-content-between'>
              <a href="https://github.com/DhirajUpadhyay25" target='_new' className="btn-fill">View Project</a>
              <a href="https://github.com/DhirajUpadhyay25" target='_new' className="btn-fill">View Details</a>
              </div>
             </div>
        </div>
        

        {/* for next 3 */}

      </div>
      



    </>
  )
}
