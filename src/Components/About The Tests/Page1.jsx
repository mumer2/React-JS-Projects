import React from 'react';
import { Footer } from '../Home/Footer';

export const Page1 = () => {
  return (
    <div id='Blog'>
      <div className="blog">
        <h2>Page Image Alignment</h2>
      </div>



<div className="container" id='test'>
  <div className="row">
  <div className="col-md-8 col-sm-12 line-height">
  <h1>Page Image Alignment</h1>

   <p>Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started.</p>
   <br/>
   <p>On the topic of alignment, it should be noted that users can choose from the options of None, Left, Right, and Center. In addition, they also get the options of Thumbnail, Medium, Large & Fullsize.</p>
   <br/>
    <img className='si1' src="Images/si1.jpg" alt="" />
   
   <p className='m-3'>The image above happens to be <b>centered</b>.</p>

   <div className="row">
    <div className="col-md-3">
        <img src="Images/si2.jpg" alt="" />
    </div>
    <div className="col-md-9 line-height">
        <p>The rest of this paragraph is filler for the sake of seeing the text wrap around the 150×150 image, which is <b>left aligned.</b> </p>
        <p>As you can see the should be some space above, below, and to the right of the image. The text should not be creeping on the image. Creeping is just not right. Images need breathing room too. Let them speak like you words. Let them do their jobs without any hassle from the text. In about one more sentence here, we’ll see that the text moves from</p>
    </div>
    <p>the right of the image down below the image in seamless transition. Again, letting the do it’s thang. Mission accomplished!</p>
   </div><br/>
   <p>And now for a <b>massively large image</b>. It also has <b>no alignment</b>.</p><br/>
   <div className="container-fluid si3">
   <img src="Images/si3.jpg" alt="" />
   </div>

   <p className='mt-3'>The image above, though 1200px wide, should not overflow the content area. It should remain contained with no visible disruption to the flow of content.</p>

   <div className="row">
    <div className="col-md-6">
        <p>And now we’re going to shift things to the right align. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there… Hey guy! Way to rock that right side. I don’t care what the left aligned image says, you look great. Don’t let anyone else tell you differently.</p>
        <p>In just a bit here, you should see the text start to wrap below the right aligned image and settle in nicely. There should still be plenty of room and everything should be sitting pretty. Yeah… Just like that. It never felt so good to be right.</p>

    </div>
    <div className="col-md-6">
        <img src="Images/si4.jpg" alt="" />
    </div>
   </div>
   <p>And just when you thought we were done, we’re going to do them all over again with captions!</p>

   <div className='container p-3 m-3 si5'>
    <img src="Images/si5.jpg" alt="" />
    <p>Look at 580×300 getting some <b className='blue'>caption</b> love.</p>
   </div>
   <p>The image above happens to be <b>centered</b>. The caption also has a link in it, just to see if it does anything funky.</p>



   <div className="row">
    <div className="col-md-3">
        <img src="Images/si2.jpg" alt="" />
    </div>
    <div className="col-md-9">
        <p>The rest of this paragraph is filler for the sake of seeing the text wrap around the 150×150 image, which is <b>left aligned.</b> </p>
        <p>As you can see the should be some space above, below, and to the right of the image. The text should not be creeping on the image. Creeping is just not right. Images need breathing room too. Let them speak like you words. Let them do their jobs without any hassle from the text. In about one more sentence here, we’ll see that the text moves from</p>
    </div>
    <p>the right of the image down below the image in seamless transition. Again, letting the do it’s thang. Mission accomplished!</p>
   </div>
   <p>And now for a <b>massively large image</b>. It also has <b>no alignment</b>.</p>
   <div className="container-fluid si3">
   <img src="Images/si3.jpg" alt="" />
   </div>

   <p className='mt-3'>The image above, though 1200px wide, should not overflow the content area. It should remain contained with no visible disruption to the flow of content.</p>

   <div className="row">
    <div className="col-md-6">
        <p>And now we’re going to shift things to the right align. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there… Hey guy! Way to rock that right side. I don’t care what the left aligned image says, you look great. Don’t let anyone else tell you differently.</p>
        <p>In just a bit here, you should see the text start to wrap below the right aligned image and settle in nicely. There should still be plenty of room and everything should be sitting pretty. Yeah… Just like that. It never felt so good to be right.</p>

    </div>
    <div className="col-md-6 capt">
        <img src="Images/si4.jpg" alt="" />
        <h6>Feels good to be right all the time.</h6>
    </div>
   </div>


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
