import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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

  return (
    <div className='contact'>
      <h1> Contact Me </h1>
    <div style={{paddingRight:'5em'}}>
      <div className='col-md-5' style={{width:'%50'}}>

      </div>
      <div className='col-md-4'id='contactform' >
        <form ref={form} onSubmit={sendEmail} style={{width:'95%'}}>
        
        <input type="text" name="user_name" placeholder='Full Name' style={{width:'95%' , marginBottom:'0.7em'}} />
        
        <input type="email" name="user_email" placeholder='Email' style={{width:'95%',marginBottom:'0.7em'}} />
        
        <input placeholder='Message' name="message" style={{width:'95%',marginBottom:'0.7em'}} />
        <input type="submit" value="Send"  style={{width:'95%', marginBottom:'0.7em'}}/>
        </form>
      </div>
      </div>


      
    </div>
  );
};

export default Contact