import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar' ;
import Home from './component/Home' ;
import About from './component/About' ;
import Projects from './component/Projects' ;
import Skills from './component/Skills' ;
import Experience from './component/Experience' ;
import Contact from './component/Contact' ;
import Try from './component/Try' ;
import Footer from './component/Footer' ;


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />

    </div>
    
  )
}

export default App;
