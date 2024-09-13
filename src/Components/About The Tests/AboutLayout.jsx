import React from 'react';

import { Navbar } from '../Home/Navbar';
import { Footer } from '../Home/Footer';
import { About } from './About';




function AboutLayout() {
  return (
    <div>
     <Navbar/>
     <About/>
     <Footer/>
    </div>
  );
}

export default AboutLayout;
