import React from 'react';
import { Footer } from '../Home/Footer';

export const Level2a = () => {
  return (
    <div id='Blog'>
      <div className="blog">
        <h2>Level2a</h2>
      </div>



<div className="container" id='test'>
  <div className="row">
  <div className="col-md-8 col-sm-12">
  <h1>Level2a</h1>

   <p>(lorem ipsum)</p>


   <div className='form'>
   <h4>Leave a Reply</h4>
   <p>Your email address will not be published. Required fields are marked *</p>
   <form class="custom-form">
  {/* <!-- First Name Field --> */}
  <div class="form-group">
    <input type="text" class="form-control" id="firstName" placeholder="Your name"/>
  </div>

  {/* <!-- Email Address Field --> */}
  <div class="form-group">
   
    <input type="email" class="form-control" id="email" placeholder="Email Address"/>
  </div>

  <div class="form-group">
   
   <input type="text" class="form-control" id="website" placeholder="Your Website (Optional)"/>
 </div>

  {/* <!-- Comment Section --> */}
  <div class="form-group cmnt">
    
    <textarea class="form-control" id="comment" rows="5" placeholder="Write your comment here"></textarea>
  </div>
{/* 
  <!-- Submit Button --> */}
  {/* <div class="form-group text-right">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div> */}

<div className='row'>
    <div className="col-md-8"></div>
    <div className="col-md-4">
<button className='btn1'>Leave Comment</button>

    </div>
</div>
</form>
</div>
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
