import React from 'react'
import Rectangle from '../images/Rectangle.png'
import Button from 'react-bootstrap/Button';



const About = () => {
  return (

    <section className='about-section'>
        <div className='about-contaner'>
          <div className='about-content'>

                  <div className='Aboutleft'>
                      <h1>About Us</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesettingof the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy <br/>text ever since the 1500s, when an </p>
                      <img src={Rectangle} alt=''/>
                      </div>
                  <div className='whereright'>
                 
                      <h2>Where</h2>
                      <p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry.<br/> Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to <br/>make a type specimen book. It has survived not only five centuries,<br/> but also the leap into electronic typesetting, <br/>remaining essentially unchanged. It was popularised in the 1960s with <br/>the release of Letraset sheets containing Lorem Ipsum passages, <br/>and more recently with desktop publishing software like Aldus <br/>PageMaker including versions of Lorem Ipsum.</p>
                     
                  </div>

              </div>
              

        </div>
                <div className='aboutBtn'>
                  <Button variant="warning">Help Me</Button>{' '}
                </div>
    </section>
  )
}

export default About
