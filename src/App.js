import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar' ;
import Home from './component/Home' ;
import About from './component/About' ;
import Projects from './component/Projects' ;
import Skills from './component/Skills' ;
import Experience from './component/Experience' ;
import Try from './component/Try' ;

import './App.css';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        
        

    </div>
    
  )
}

export default App;
