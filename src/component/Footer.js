import { LinkedinLogo } from "phosphor-react";
import { GithubLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";


function Footer(){
    return (
        <div className="footer">
            <div style={{fontFamily:'Poppins,sans-serif',fontSize:'35px'}}>
                RAB
            </div>
            <div style={{fontFamily:'Poppins,sans-serif',fontSize:'23px'}}>
                Rihab Ait Bahessou
            </div>
            <div className="logos">
                                        <div>
                                            <a href="https://www.linkedin.com/in/rihab-ait-bahessou-315070259/">
                                                <LinkedinLogo size={28} />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://github.com/rihabab">
                                                <GithubLogo size={28} />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://github.com/rihabab">
                                                <InstagramLogo size={28} />
                                            </a>
                                        </div>
            </div>
            <div style={{fontSize:'15px',fontFamily:'Poppins,sans-serif'}}>&copy; 2023 - 2024<span>. Rihab portfolio</span></div>
        </div>
       
    )
}

export default Footer