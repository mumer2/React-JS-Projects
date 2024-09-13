import React from 'react';
import { Sectiontop } from './Sectiontop';
import { Navbar } from '../Home/Navbar';
import { Footer } from '../Home/Footer';



function BlogLayout() {
  return (
    <div>
     <Navbar/>
     <Sectiontop/>
     <Footer/>
    </div>
  );
}

export default BlogLayout;
