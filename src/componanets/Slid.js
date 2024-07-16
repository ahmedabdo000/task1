import React from 'react'
import Button from 'react-bootstrap/Button';



const Slid = () => {
  return (
  <section  className='section-slid'>
      <div className='contaner-slid'>
        <div className='contant-slid'>
                <div className='logo'>
                  <h1>Round rock</h1>
                  <p>T  r  u  s  h   H  a  u  l  i  n  g</p>
                </div>

                <div className='slidBtn'>
                  <Button variant="primary">Experts</Button>{' '}
                </div> 

                <div className='lorem'>
                  <h2> lorem</h2>
                  <h3> lorem lorem</h3>
                </div>

                <div className='lorem-p'>    
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard <br/>dummy text ever since the</p>
                </div>

                <div className='helpbtn'>
                  <Button variant="primary">Help Me</Button>{' '}
                </div>

            </div>
        </div>
    </section>
   


  )
}

export default Slid
