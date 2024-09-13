import React from 'react';
import { Footer } from '../Home/Footer';

export const Page5 = () => {
  return (
    <div id='Blog'>
      <div className="blog">
        <h2>Page with comments disabled</h2>
      </div>



<div className="container" id='test'>
  <div className="row">
  <div className="col-md-8 col-sm-12">
  <h1>Page with comments disabled</h1>
   <p>This static Page is set not to allow comments. Verify that the Page does not display a comment list, comment reply links, or comment reply form.<br/>
   Also, verify that the Page does not display a “comments are closed” type message. Such messages are not suitable for static Pages, and should only be used on blog Posts.</p>

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

<Footer/>
    </div>
  );
};
