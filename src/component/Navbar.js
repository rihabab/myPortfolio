import { Link } from "react-router-dom";
import { House } from "phosphor-react";
import { User } from "phosphor-react";
import { ListChecks } from "phosphor-react";
import { Envelope } from "phosphor-react";




function Navbar(){
    return(
     <nav>
    <ul>
        
        <li>
            <div >
                <div className="space"></div>
                <House size={28} />
            </div>
        </li>
        <li>
            <div >
                <div className="space"></div>
                <User size={28} />
            </div>
        </li>
        <li>
            <div >
                <div className="space"></div>
                <ListChecks size={28} />
            </div>
        </li>
        <li>
            <div >
                <div className="space"></div>
                <Envelope size={28} />
            </div>
        </li>
        
    </ul>
  </nav>
    )
}

export default Navbar 