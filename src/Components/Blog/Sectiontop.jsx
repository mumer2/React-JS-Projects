import React from 'react';

export const Sectiontop = () => {
  return (
    <div id='Blog'>
      <div className="blog">
        <h2>Blog</h2>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-8" id='img1'>
            <img src="B1.jpg" alt="Blog Image" />
            <div className='link'>
              <a href='/'>News</a>
            </div>


            <h1>Template: Sticky</h1>
          </div>

          <div className="col-md-4" id='links'>
            <p>Type Here</p>
            <div className='coontainer'>
            <h4>Top Posts</h4>
           
            <div className='row'>
                <div className="col-md-4" id='linkimage'>
                    <img src="Images/l1.webp" alt="" />
                </div>
                <div className="col-md-8 p-2">
                    <a href="/">Template: More Tag</a>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-4" id='linkimage'>
                    <img src="Images/l2.webp" alt="" />
                </div>
                <div className="col-md-8 p-2">
                    <a href="/">Template: Sticky</a>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-4" id='linkimage'>
                    <img src="Images/l3.webp" alt="" />
                </div>
                <div className="col-md-8 p-2">
                    <a href="/">Hello world!</a>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-4" id='linkimage'>
                    <img src="Images/l4.webp" alt="" />
                </div>
                <div className="col-md-8 p-2">
                    <a href="/">Markup: HTML Tags and Formatting
                    </a>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-4" id='linkimage'>
                    <img src="Images/l5.webp" alt="" />
                </div>
                <div className="col-md-8 p-2">
                    <a href="/">Markup: Image Alignment</a>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-4" id='linkimage'>
                    <img src="Images/l6.webp" alt="" />
                </div>
                <div className="col-md-8 p-2">
                    <a href="/">Template: Featured Image (Horizontal)</a>
                </div>
            </div>

            <h4>Recent Posts</h4>

            <div className='linkblog'>
                <a href="/">Template: More Tag </a>
                <a href="/">Hello world! </a>
                <a href="/">Markup: HTML Tags and Formatting </a>
                <a href="/">Markup: Image Alignment </a>
                <a href="/">Markup: Text Alignment</a>
            </div>

            <h4>Categories</h4>
            <div className='linkblog'>
                <a href="/">Edge Case </a>
                <a href="/">Markup </a>
                <a href="/">Media </a>
                <a href="/">News</a>
                <a href="/">Post Formats</a>
                <a href="/">Template</a>

            </div>
            </div>
          </div>
        </div>
      </div> */}



<div className="container blog">
  <div className="row">
  <div className="col-md-8 col-sm-12" id="img1">

  <div className="image-container">
  <img src="B1.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">News</a>
  </div>
</div>

<div className="sticky">
  <h1>Template: Sticky</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>This is a sticky post.</p>
  <p>There are a few things to verify:</p>
  <ul>
    <li>The sticky post should be distinctly recognizable in some way in comparison to normal posts. You can style the <b className='red'>.sticky</b> class if you are using the <b className='blue'>post_class()</b> function to generate your post classes, which is a best practice.</li>
    <li>They should show at the very top of the blog index page, even though they could be several posts back chronologically</li>
    <li>They should still show up again in their chronologically correct postion in time, but without the sticky indicator.</li>
    <li>If you have a plugin or widget that lists popular posts or comments, make sure that this sticky post is not always at the top of those lists unless it really is popular.</li>
  </ul>
  </div>


  <div className="row">
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t1.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">News</a>
  </div>
</div>

<div className="sticky">
  <h1>Template: More Tag</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>This content is before the <b className='blue'>more tag</b>.</p>
  <p>Right after this sentence should be a “continue reading” button of some sort.</p>

  <button className='stickybtn'>Read More <i class="fa-solid fa-arrow-right"></i></button>
  </div>
    </div>
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t2.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">News</a>
  </div>
</div>
<div className="sticky">
  <h1>Hello world!</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>Welcome to <b className='blue'>colorlib.com</b>. This is your first post. Edit or delete it, then start blogging!</p>
  </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t3.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">Markup</a>
  </div>
</div>

<div className="sticky">
  <h1>Markup: HTML Tags and Formatting</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>HTML Tags and Formatting</p>
  <button className='stickybtn'>Read More <i class="fa-solid fa-arrow-right"></i></button>
  </div>
    </div>
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t4.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">Markup</a>
  </div>
</div>
<div className="sticky">
  <h1>Markup: Image Alignment</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started.</p>
  <button className='stickybtn'>Read More <i class="fa-solid fa-arrow-right"></i></button>
  </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t5.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">Markup</a>
  </div>
</div>

<div className="sticky">
  <h1>Markup: Text Alignment</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <h1>Default</h1>
  <p>This is a paragraph. It should not have any alignment of any kind. It should just flow like you would normally expect. Nothing fancy. Just straight up text, free flowing, with love. Completely neutral and not picking a side or sitting on the fence. It just is. It just freaking is. It likes where it is. It does not feel compelled to pick a side. Leave him be. It will just be better that way. Trust me.</p>
  <button className='stickybtn'>Read More <i class="fa-solid fa-arrow-right"></i></button>

  </div>
    </div>
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t6.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">Markup</a>
  </div>
</div>
<div className="sticky">
  <h1>Markup: Title With Special Characters</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>Putting special characters in the title should have no adverse effect on the layout or functionality.</p>
  <button className='stickybtn'>Read More <i class="fa-solid fa-arrow-right"></i></button>

  </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t7.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">Markup</a>
  </div>
</div>

<div className="sticky">
  <h1>Markup: Title With Markup</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  
  <button className='stickybtn'>Read More <i class="fa-solid fa-arrow-right"></i></button>

  </div>
    </div>
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t8.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">Edge Case</a>
  </div>
</div>
<div className="sticky">
  <h1>Edge Case: Nested And Mixed Lists</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>Nested and mixed lists are an interesting beast. It’s a corner case to make sure that</p>
  
  <button className='stickybtn'>Read More <i class="fa-solid fa-arrow-right"></i></button>

  </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t9.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">News</a>
  </div>
</div>

<div className="sticky">
  <h1>Template: Featured Image (Vertical)</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>This post should display a featured image, if the theme supports it.</p>
  <p>Non-square images can provide some unique styling issues.</p>
  <p>This post tests a vertical featured image.</p>
  </div>
    </div>
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t10.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">News</a>
  </div>
</div>
<div className="sticky">
  <h1>Template: Featured Image (Horizontal)</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>This post should display a featured image, if the theme supports it.</p>
  <p>Non-square images can provide some unique styling issues.</p>
  <p>This post tests a horizontal featured image.</p>
  </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
    <div className="image-container">
  <img src="Images/t11.jpg" alt="Blog Image" />
  <div className="image-link">
    <a href="/">News</a>
  </div>
</div>

<div className="sticky">
  <h1>Template: Excerpt (Defined)</h1>
  <p>January 7, 2016October 21,  <b>|</b>  2020by Aigars</p>
  <p>This is the post content. It should be displayed in place of the user-defined excerpt in single-page views.</p>
  </div>
    </div>
    <div className="col-md-6">
    </div>
  </div>

  <div className="pagination">
  {/* <a href="/" className="prev">Previous</a> */}
  <a href="/" className="page-number active">1</a>
  <a href="/" className="page-number">2</a>
  <a href="/" className="page-number">3</a>
  <a href="/" className="next"><i class="fa-solid fa-arrow-right"></i></a>
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

    </div>
  );
};
