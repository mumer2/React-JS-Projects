import React, { useState, useEffect } from 'react'

export const Section4 = () => {
  return (
    <div className='sliderr'>
        <div className="parallax3">
            <div className="parallax3-content">
                <h2>What Our Customers Say</h2>
            </div>


            <div class="container">
            <div id="demo" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="carousel-caption">
                      <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                          I don't know what will.This was the very best explanation of frameworks for brginners 
                          that I've ever seen.
                      </p>
                      <img src="https://i.imgur.com/lE89Aey.jpg"/>
                      <div id="image-caption">Nick Doe</div>
                    </div>   
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                        I don't know what will.This was the very best explanation of frameworks for brginners 
                        that I've ever seen.</p>
                        <img src="https://i.imgur.com/QptVdsp.jpg" class="img-fluid"/>
                        <div id="image-caption">Cromption Greves</div>
                    </div>   
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code,
                        I don't know what will.This was the very best explanation of frameworks for brginners 
                        that I've ever seen.</p>
                        <img src="https://i.imgur.com/jQWThIn.jpg" class="img-fluid"/>
                        <div id="image-caption">Harry Mon</div>
                    </div>   
                  </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <i class='fas fa-arrow-left'></i>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
              
        </div>
        </div>
    </div>
  )
}
