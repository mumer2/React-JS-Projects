import React from 'react';

import { Navbar } from '../Home/Navbar';
import { Footer } from '../Home/Footer';
import { Shop } from './Shop';





function ShopLayout() {
  return (
    <div>
     <Navbar/>
     <Shop/>
     <Footer/>
    </div>
  );
}

export default ShopLayout;
