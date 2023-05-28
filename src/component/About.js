import Lottie from 'react-lottie';
import animationData from '../lotties/desktop.json';

function About(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return( 
        <div className="about" id='about'>
            
            <div class="wrapper">
                <h1> ABOUT ME </h1>
                <div className='aboutcontent'>
                    <div className='aboutlottie'>
                        <Lottie 
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                    
                        <div className="abouttext" >Hi, my name is Rihab and  
                            I have always been curious about the ever-changing and expansive 
                            field of software engineering. Pursuing a career in software engineering 
                            allows me to apply my analytical and creative problem-solving skills as an INTP personality type
                            to build innovative solutions. 
                        </div>
                   
                </div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div  className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
                <div className='bubble'><span class="dot"></span></div>
            </div>
        </div>
    )
}

export default About