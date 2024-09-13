import React from 'react';

import { Navbar } from '../Home/Navbar';
import { Footer } from '../Home/Footer';
import { Portfolio } from './Portfolio';



function PortfolioLayout() {
  return (
    <div>
     <Navbar/>
     <Portfolio/>
     <Footer/>
    </div>
  );
}

export default PortfolioLayout;
