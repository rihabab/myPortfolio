import Html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import reactjs from '../assets/images/reactjs.png';
import nodejs from '../assets/images/nodejs.png';
import expressjs from '../assets/images/express.png';
import java from '../assets/images/java.png';
import python from '../assets/images/python.png';
import selenium from '../assets/images/selenium.webp';
import junit from '../assets/images/junit.png';
import oracle from '../assets/images/oracle.png';
import mysql from '../assets/images/mysql.webp';
import postgresql from '../assets/images/postgresql.png';



function Skills() {
    return (
        <div>
            <h1>SKILLS</h1>
            
        
            <h2>Technical Skills</h2>
            <div className='skill'>
                <div className='skillcont'>
                    <div className='skillbox'>
                        <div>Front End</div>
                        <div className="skillset">
                            <div className='skillimg'><img src={Html} alt="html icon" /><div>HTML</div></div>
                            <div className='skillimg'><img src={css} alt="css icon" /><div>CSS</div></div>
                            <div className='skillimg'><img src={javascript} alt="javascript icon" /><div>JavaScript</div></div>
                            <div className='skillimg'><img src={reactjs} alt="reactjs icon" /><div>React js</div></div>
                        </div>
                    </div>
                    <div className='skillbox'>
                        <div>Databases</div>
                        <div className="skillset">
                            <div className='skillimg'><img src={oracle} alt="selenium icon" className='data'/></div>
                            <div className='skillimg'><img src={mysql} alt="junit icon" className='data'/></div>
                            <div className='skillimg'><img src={postgresql} alt="junit icon" className='data'/></div>
                        </div>
                    </div>
                </div>
                <div className='skillcont'> 
                    <div className='skillbox'>
                        <div>Back End</div>
                        <div className="skillset">
                            <div className='skillimg'><img src={nodejs} alt="nodejs icon" className='node'/><div>Node js</div></div>
                            <div className='skillimg'><img src={expressjs} alt="erxpressjs icon" /><div>Express js</div></div>
                            <div className='skillimg'><img src={java} alt="java icon" /><div>java</div></div>
                            <div className='skillimg'><img src={python} alt="python icon" /><div>python</div></div>
                            
                        </div>
                    </div>
                    <div className='skillbox'>
                        <div>Software Tools</div>
                        <div className="skillset">
                            <div className='skillimg'><img src={selenium} alt="selenium icon" /><div>Html</div></div>
                            <div className='skillimg'><img src={junit} alt="junit icon" className='junit'/><div>Html</div></div>
                            
                        </div>
                    </div>
                </div>
                
                
            </div>
       
        

        </div>
        
    )
}


export default Skills