import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";



const ContactUs = () => {
  return (

    <section className='contant'>
        <div className='contactUs-contaner'>
                  <h2>ContactUs</h2>

            <div className='ContactUs-wrappr'>
                    <div className='contact-form'>
                        <FloatingLabel controlId="floatingName" label="Name" className="mb-2" >
                        <Form.Control type="Name" placeholder="Name" />
                        </FloatingLabel>

                        <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-2">
                        <Form.Control type="email" placeholder="name@example.com" />
                      </FloatingLabel>
                      <FloatingLabel controlId="floatingPassword" label="Password"  className="mb-2">
                        <Form.Control type="password" placeholder="Password" />
                      </FloatingLabel>
                      <div className='contactUsBtn'>
                      <Button variant="outline-info">Send</Button>{' '}
                      </div> 
                    </div>


                      <div className='contact-info'> 
                          <div className='email'>
                          <MdEmail /> 
                          </div>
                          <p className='p'>upskilling.eg1@gmail.com</p>
                        
                          
                          <div className='phone'>
                          <FaPhone />
                          </div>
                          <p className='p2'>+20 115 493 2137</p>
                          
                          
                    </div>
            </div>
                  
        </div>
    </section>
  )
}

export default ContactUs
