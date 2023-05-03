import { LinkedinLogo } from "phosphor-react";
import { GithubLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";



function Home(){
    return (
        <div class="bg">
            <div class="intro">
            <div class="container">
                
                <div class="home" id="HOME">
                    <div class="introtext">
                        <div class="hometitle">RIHAB AIT BAHESSOU</div>
                        <div class="hometext">An aspiring software engineering student at @INPT, a web developer, a Design Thinker, and a UX/UI designer</div>
                        
                            <div class="containerbtn">
                                    <a href="#" class="button">
                                    <div class="button__line"></div>
                                    <div class="button__line"></div>
                                    <span class="button__text">MY CV</span>
                                    <div class="button__drow1"></div>
                                    <div class="button__drow2"></div>
                                    </a>
                                    <div className="logos">
                                        <div>
                                         <LinkedinLogo size={28} />
                                        </div>
                                        <div>
                                         <GithubLogo size={28} />
                                        </div>
                                        <div>
                                         <InstagramLogo size={28} />
                                        </div>
                                        <div>____</div>
                                    </div>
                            </div>
                                
                            
                        
                    </div>

                </div>
            </div>
            <section>
                <div class='air air1'></div>
                <div class='air air2'></div>
                <div class='air air3'></div>
                <div class='air air4'></div>
            </section>
        </div>
        </div>
        
    )
}

export default Home