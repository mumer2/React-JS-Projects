import React from 'react';
import { Footer } from '../Home/Footer';

const comments = [
    {
      id: 1,
      name: 'tellyworthtest2',
      date: 'September 4, 2007 at 10:49 am',
      commentText: 'This is a great article, I really enjoyed reading it',
    },
    {
      id: 2,
      name: 'Anon',
      date: 'September 4, 2007 at 10:49 am',
      profileImage: 'https://via.placeholder.com/50',
      commentText: 'Thank you for the detailed explanation.',
    },
    {
      id: 3,
      name: 'John Doe',
      date: 'September 4, 2007 at 10:49 am',
      profileImage: 'https://via.placeholder.com/50',
      commentText: 'I have a few questions, can someone help?',
    },
    
  ];
export const Page4 = () => {
  return (
    <div id='Blog'>
      <div className="blog">
        <h2>Page with comments</h2>
      </div>



<div className="container" id='test'>
    <h1>Page with comments</h1>
  <div className="row">
  <div className="col-md-8 col-sm-12">
    <p style={{lineHeight:'1.8'}}>Repository-hosted Themes are required to support display of comments on static Pages as well as on single blog Posts.  This static Page has comments, and these comments should be displayed.<br/>
If the Theme includes a custom option to prevent static Pages from displaying comments, such option must be disabled (i.e. so that static Pages display comments) by default.<br/>
Also, verify that this Page does not display taxonomy information (e.g. categories or tags) or time-stamp information (Page publish date/time).</p>

<div className="comment-section">
      <h4>3 COMMENTS</h4>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
            <div className='row'>
                <div className='col-md-3'>
          <div className="profile-image">
            <img src='Images/c1.png' alt={`${comment.name}'s profile`} />
          </div></div>
          <div className='col-md-9'>
          <div className="comment-details">
            <div className="comment-header">
              <h4><b>{comment.name}</b></h4>
            </div>
            <span>{comment.date}</span> <button className='cmntbtn'>Reply</button>

            <p>{comment.commentText}</p>
          </div>
        </div>
        </div>
        </div>
      ))}
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
