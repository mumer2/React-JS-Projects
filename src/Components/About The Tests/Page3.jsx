import React from 'react';

export const Page3 = () => {
  return (
    <div id='Blog'>
      <div className="blog">
        <h2>Clearing Floats</h2>
      </div>



<div className="container" id='test'>
    <h1>Clearing Floats</h1>
  <div className="row">
  <div className="col-md-8 col-sm-12">
   <p>The last item in this page’s content is a floated image. Make sure any elements after it are clearing properly.</p>
   <img className='page3' src="Images/page3.jpg" alt="" />
</div>


    <div className="col-md-4 col-sm-12" id="links">
      <p>Type Here</p>
      <div className="sidebar-container">
        <h4>Top Posts</h4>

        <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l1.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Template: More Tag</a>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l2.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Template: Sticky</a>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l3.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Hello world!</a>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l4.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Markup: HTML Tags and Formatting</a>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l5.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Markup: Image Alignment</a>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l6.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Template: Featured Image </a>
          </div>
        </div>

        <h4>Recent Posts</h4>

        <div className="linkblog">
          <a href="/">Template: More Tag</a>
          <a href="/">Hello world!</a>
          <a href="/">Markup: HTML Tags and Formatting</a>
          <a href="/">Markup: Image Alignment</a>
          <a href="/">Markup: Text Alignment</a>
        </div>

        <h4>Categories</h4>
        <div className="linkblog">
          <a href="/">Edge Case</a>
          <a href="/">Markup</a>
          <a href="/">Media</a>
          <a href="/">News</a>
          <a href="/">Post Formats</a>
          <a href="/">Template</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};
