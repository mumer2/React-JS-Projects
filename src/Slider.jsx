import React from 'react'

export const Slider = () => {
    const logos = [
        { src: 'css-logo.png', alt: 'CSS Logo' },   // Replace with your actual images
        { src: 'less-logo.png', alt: 'LESS Logo' },
        { src: 'sass-logo.png', alt: 'Sass Logo' },
        { src: 'bootstrap-logo.jpg', alt: 'Bootstrap Logo' },
        { src: 'html5-logo.png', alt: 'HTML Logo' },
        { src: 'colorlib-logo.png', alt: 'JavaScript Logo' },
        { src: 'facebook-logo.png', alt: 'JavaScript Logo' },
        { src: 'js-logo.png', alt: 'JavaScript Logo' },


      ];
  return (
    <div>
         <div className="logo-slider">
      <h2 className="slider-title">Our Main Clients</h2>
      <div className="slider-wrapper">
        <div className="slider-track">
          {logos.map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
