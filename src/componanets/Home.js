import React from 'react';
import Slid from  './Slid';
import About from './About';
import Serves from './Serves';
import Testymonials from './Testymonials';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Slid/>
      <About/>
      <Serves/>
      <Testymonials/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
