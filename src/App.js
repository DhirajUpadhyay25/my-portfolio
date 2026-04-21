
import Navbar from './components/Navbar';
import './CssCodes/App.css';
import { BrowserRouter , Route, Routes  } from "react-router-dom";
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Skill from './components/Skill'
import Services from './components/Services';
import './CssCodes/Skills.css';
import Footer from './components/Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {

  function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
      const scrollToSection = () => {
        if (location.hash) {
          const el = document.querySelector(location.hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      };

      // run on load
      scrollToSection();

      // ALSO run on hashchange (🔥 FIX)
      window.addEventListener("hashchange", scrollToSection);

      return () => {
        window.removeEventListener("hashchange", scrollToSection);
      };
    }, [location]);

    return null;
  }




  return (
    <>
      
      <BrowserRouter>
        
        <Navbar />
        <ScrollToHash />
                     <Routes>
                      <Route path="/" element={<Portfolio/>}></Route>
                      <Route path="/AboutMe" element={<AboutMe/>}></Route>
                      <Route path="/#Skill" element={<Skill/>}></Route>
                      <Route path="/Project" element={<Project />}></Route>
                      <Route path="/Services" element={<Services/>}></Route>
                      <Route path="/Contact" element={<Contact/>}></Route> 
        </Routes>
        <Footer/>
     </BrowserRouter>

    
    
    
    </>
   
  );
}

export default App;
