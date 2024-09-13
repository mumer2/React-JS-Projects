import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Icons for navigation

const Carousel = () => {
  const slides = [
    {
      text: "Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.",
      image: "l1.jpg",
      author: "John Doe",
    },
    {
      text: "Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper.",
      image: "l2.jpg",
      author: "Aigars Silkalns",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="parallax-bg">
        <h2>What Our Customers Say</h2>
      </div>

      <div className="container">
        <div className="carousel-content-wrapper">
          {/* Left Arrow */}
          <button onClick={prevSlide} className="nav-arrow left-arrow">
            <FaArrowLeft />
          </button>

          {/* Slide Content */}
          <div className="carousel-content">
            <div className="carousel-slide">
              <div className="text-line">{slides[currentSlide].text}</div>
              <div className="image-circle">
                <img src={slides[currentSlide].image} alt="Author" />
              </div>
              <div className="author-name">{slides[currentSlide].author}</div>
            </div>
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="nav-arrow right-arrow">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
