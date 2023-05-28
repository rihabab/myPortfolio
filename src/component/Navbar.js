
import { House } from "phosphor-react";
import { User } from "phosphor-react";
import { ListChecks } from "phosphor-react";
import { Envelope } from "phosphor-react";
import { Link  } from "react-scroll";




function Navbar(){
    return(
     <nav>
    <ul>
        
        <li>
            <div >
                <Link  to="home" spy={true} smooth={true} offset={50} duration={500} > 
                    <div className="space"></div>
                    <House size={28} /><a href="#skills"></a>
                </Link>
                
            </div>
        </li>
        <li>
            <div >
                <Link  to="about" spy={true} smooth={true} offset={50} duration={500} >
                    <div className="space"></div>
                    <User size={28} />
                </Link>
                
            </div>
        </li>
        <li>
            <div >
                <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
                    <div className="space"></div>
                    <ListChecks size={28} />
                </Link>
                
            </div>
        </li>
        <li>
            <div >
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <div className="space"></div>
                    <Envelope size={28} />
                </Link>
                
                
            </div>
        </li>
        
    </ul>
  </nav>
    )
}

export default Navbar 