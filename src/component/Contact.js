import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie';
import animationData from '../lotties/contact';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mscvswd', 'template_vlnw0k8', form.current, 'zmXDiFlmjL23kx4wg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  /* <div className='separator'></div> */
  return (
    <div className='contact' id='contact'>
      
      <h2 style={{height:'20px', fontSize:'30px', marginLeft:'20%', color:'rgb(114, 18, 232)'}}> Get in touch </h2>
      <div className='contactcont' style={{paddingRight:'5em',paddingTop:'0', display:'flex', justifyContent:'center'}}>
      <div >
      <Lottie 
                            options={defaultOptions}
                            height={500}
                            width={500}
                        />
      </div>
      <div id='contactform' style={{padding:'110px 70px 0px 70px'}}>
        <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="user_name" placeholder='Full Name' style={{width:'100%' , marginBottom:'0.7em'}} />
        <input type="email" name="user_email" placeholder='Email' style={{width:'100%',marginBottom:'0.7em'}} />
        <textarea placeholder='Message' name="message" style={{width:'100%',marginBottom:'0.7em'}} />
        <button type="submit" value="Send" class="button-86" role="button">Contact me</button>
        
        </form>
      </div>
      </div>


      
    </div>
  );
};

export default Contact