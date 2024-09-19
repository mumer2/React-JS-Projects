import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './Carousel';
import { Footer } from './Components/Home/Footer';
import { Gallery } from './Components/Home/Gallery';
import { Header } from './Components/Home/Header';
import { Navbar } from './Components/Home/Navbar';
import { Paralax2 } from './Components/Home/Paralax2';
import { Section1 } from './Components/Home/Section1';
import { Section2 } from './Components/Home/Section2';
import { Section3 } from './Components/Home/Section3';
import { Slider } from './Slider';
import BlogLayout from './Components/Blog/BlogLayout';  // Blog layout containing all blog components
import PortfolioLayout from './Components/Portfolio/PortfolioLayout';  // Blog layout containing all blog components
import AboutLayout from './Components/About The Tests/AboutLayout';
import Level1Layout from './Components/Level1/Level1Layout';
import ShopLayout from './Components/Shop/ShopLayout';
import { Page1 } from './Components/About The Tests/Page1';
import { Footerup } from './Components/Home/Footerup';
import { Page2 } from './Components/About The Tests/Page2';
import { Page3 } from './Components/About The Tests/Page3';
import { Page4 } from './Components/About The Tests/Page4';
import { Page5 } from './Components/About The Tests/Page5';
import { Level2 } from './Components/Level1/Level2';
import { Level2b } from './Components/Level1/Level2b';
import { Level2a } from './Components/Level1/Level2a';
import { Level3 } from './Components/Level1/Level3';
import { Level3a } from './Components/Level1/Level3a';
import { Level3b } from './Components/Level1/Level3b';


function App() {
  return (
    <Router>
      <div>
        
        <Navbar />
        <Routes>
          {/* Route for Home */}
          <Route path="/" element={
            <>
              <Header />
              <Section1 />
              <Section2 />
              <Paralax2 />
              <Section3 />
              <Gallery />
              <Carousel />
              <Slider />
              <Footerup/>
              <Footer />
            </>
          } />

          {/* Route for Blog */}
          <Route path="/blog" element={<BlogLayout />} />
          <Route path="/portfolio" element={<PortfolioLayout />} />
          <Route path="/about" element={<AboutLayout />} />
          <Route path="/level1" element={<Level1Layout />} />
          <Route path="/Shop" element={<ShopLayout />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />

          <Route path="/level2" element={<Level2 />} />
          <Route path="/level2b" element={<Level2b />} />
          <Route path="/level2a" element={<Level2a />} />

          <Route path="/level3" element={<Level3 />} />
          <Route path="/level3a" element={<Level3a />} />
          <Route path="/level3b" element={<Level3b />} />









          
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
