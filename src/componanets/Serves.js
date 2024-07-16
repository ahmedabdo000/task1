import React from 'react'
import Card from 'react-bootstrap/Card';
import Rectangl1e from '../images/Rectangl1e.png'
import Rectangl3e from '../images/Rectangl3e.png'
import Rectangl2e from '../images/Rectangl2e.png'
import Button from 'react-bootstrap/Button';



const Serves = () => {
  return (
    <div className='serves-cotaner'> 

        <div className='serves-word'>
         <h1>Serves</h1>
        </div>
        <div className='serves-cards'>

                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                    <img src={Rectangl1e} alt=''/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className='text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
                </div>  


                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                    <img src={Rectangl3e} alt=''/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className='text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
                </div>  


                <div className='card'>
                    <Card style={{ width: '18rem' }}>
                    <img src={Rectangl2e} alt=''/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className='text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
                </div>  


        </div>
              <div className='helpbtn'>
            <Button variant="primary">Help Me</Button>{' '}
              </div> 
    </div>
    
    
    
  )
}

export default Serves
