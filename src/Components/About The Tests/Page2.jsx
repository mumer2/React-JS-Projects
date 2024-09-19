import React from 'react';
import { Footer } from '../Home/Footer';

export const Page2 = () => {
  return (
    <div id='Blog'>
      <div className="blog">
        <h2>Page Markup And Formatting</h2>
      </div>



<div className="container" id='test'>
  <div className="row">
  <div className="col-md-8 col-sm-12">
  <h1>Page Markup And Formatting</h1>
<div className='headings'>
    <p> <b> Headings</b></p>
    <h1>Header one</h1>
    <h2>Header two</h2>
    <h3>Header three</h3>
    <h4>Header foue</h4>
    <h5>Header five</h5>
    <h6>Header six</h6>

    
    <h1>Blockquotes</h1>
    <p>Single line blockquote:</p>
<br/><br/>
    <q>"Stay hungry. Stay foolish".</q>
<br/><br/>
    <p>Multi line blockquote with a cite reference:</p>
<br/><br/>
    "People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things. Steve Jobs – Apple Worldwide Developers’ Conference, 1997"

    
    </div>
    <br/>
    <h2>Tables</h2>
    <br/>
    <table style={{ borderCollapse: 'collapse', borderSpacing: '10px', width: '100%' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid gray',borderTop: '1px solid gray', padding: '10px' }}>
          <th style={{  padding: '10px' }}>Employee</th>
          <th style={{  padding: '10px' }}>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ borderBottom: '1px solid gray', padding: '10px' }}><a href='/'>Jane</a></td>
          <td style={{ borderBottom: '1px solid gray', padding: '10px', color: 'gray' }}>$1</td>
          <td style={{ borderBottom: '1px solid gray', padding: '10px', color: 'gray' }}>Because that’s all Steve Job’ needed for a salary.</td>

        </tr>
        <tr>
        <td style={{ borderBottom: '1px solid gray', padding: '10px' }}><a href='/'>John</a></td>
          <td style={{ borderBottom: '1px solid gray', padding: '10px', color: 'gray' }}>$100K</td>
          <td style={{ borderBottom: '1px solid gray', padding: '10px', color: 'gray' }}>For all the blogging he does.</td>

        </tr>
        <tr>
        <td style={{ borderBottom: '1px solid gray', padding: '10px' }}><a href='/'>Jane</a></td>
          <td style={{ borderBottom: '1px solid gray', padding: '10px', color: 'gray' }}>$100M</td>
          <td style={{ borderBottom: '1px solid gray', padding: '10px', color: 'gray' }}>Pictures are worth a thousand words, right? So Tom x 1,000.</td>

        </tr>
        <tr>
        <td style={{ borderBottom: '1px solid gray', padding: '10px' }}><a href='/'>Jane</a></td>
          <td style={{ borderBottom: '1px solid gray', padding: '10px', color: 'gray' }}>$100B</td>
          <td style={{ borderBottom: '1px solid gray', padding: '10px', color: 'gray' }}>With hair like that?! Enough said…</td>

        </tr>
      </tbody>
    </table>
<br/>
    <h2>Definition Lists</h2>
    <br/>
    <dl>
        <dt>Definition List Title</dt>
        <dd>Definition list division.</dd>

        <dt>Startup</dt>
        <dd>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</dd>

        <dt>#dowork</dt>
        <dd>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.</dd>


        <dt>Do It Live</dt>
        <dd>I’ll let Bill O’Reilly will <b className='blue'>explain</b> this one.</dd>
    
    </dl>

   <h1>Unordered Lists (Nested)</h1>
   <ul>
    <li>List item one</li>
    <ul>
        <li>List item one</li>
        <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
        </ul>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
    </ul>
    <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
   </ul>

<h1>Ordered List (Nested)</h1>
   <ol>
    <li>List item one</li>
    <ol>
        <li>List item one</li>
        <ol>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
        </ol>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
    </ol>
    <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
   </ol>


   <h1>HTML Tags</h1>
   <p>These supported tags come from the WordPress.com code <b  className='blue'>FAQ.</b></p>
   <p><b>Address Tag</b></p>
   <address>
 <p>  1 Infinite Loop <br/>
Cupertino, CA 95014<br/>
United States</p>
   </address>

   <p><b>Anchor Tag (aka. Link)</b></p>
   <p>This is an example of a .<a href=''>link</a></p>

   <p><b>Abbreviation Tag</b></p>
   <p>The abbreviation <abbr>srsly</abbr> stands for “seriously”.</p>

   <p><b>Acronym Tag</b></p>
   <p>The acronym ftw stands for “for the win”.</p>

   <p><b>Big Tag</b></p>
   <p>These tests are a <big>big</big> deal, but this tag is no longer supported in HTML5.</p>

   <p><b>Cite Tag</b></p>
   <p><cite>“Code is poetry.” —Automattic</cite></p>

   <p><b>Code Tag</b></p>
   <p>You will learn later on in these tests that <code>word-wrap: break-word;</code> will be your best friend.</p>
   
   <p><b>Delete Tag</b></p>
   <p>This tag will let you <strike>strikeout text</strike>, but this tag is no longer supported in HTML5 (use the strike instead).</p>

   <p><b>Emphasize Tag</b></p>
   <p>The emphasize tag should <em>italicize</em> text.</p>

   <p><b>Insert Tag</b></p>
   <p>This tag should denote <ins>inserted</ins> text.</p>

   <p><b>Keyboard Tag</b></p>
   <p>This scarcely known tag emulates <code>keyboard text</code>, which is usually styled like the code tag.</p>
   
   <p><b>Preformatted Tag</b></p>
   <p>This tag styles large blocks of code.</p>
  <p>
  <pre style={{background:'white', border:'1px solid gray', padding:'10px', fontSize:'16px', color:'black'}}>
{`.post-title {
    margin: 0 0 5px;
    font-weight: bold;
    font-size: 38px;
    line-height: 1.2;
}`}
            </pre>
  </p>

  <p><b>Quote Tag</b></p>
  <p><q>Developers, developers, developers…</q> –Steve Ballmer</p>

  <p><b>Strong Tag</b></p>
  <p>This tag shows <strong>bold text.</strong></p>

  <p><b>Subscript Tag</b></p>
  <p>Getting our science styling on with H<sub>2</sub>O, which should push the “2” down.</p>

  <p><b>Superscript Tag</b></p>
  <p>Still sticking with science and Isaac Newton’s E = MC<sup>2</sup>, which should lift the 2 up.</p>
  

  <p><b>Teletype Tag</b></p>
  <p>This rarely used tag emulates <tt>teletype text</tt>, which is usually styled like the code tag.</p>
  
  <p><b>Variable Tag</b></p>
  <p>This allows you to denote <var>variables</var>.</p>



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

        {/* <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l1.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Template: More Tag</a>
          </div>
        </div> */}

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

        {/* <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l4.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Markup: HTML Tags and Formatting</a>
          </div>
        </div> */}

        <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l5.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Markup: Image Alignment</a>
          </div>
        </div>

        {/* <div className="row mb-3">
          <div className="col-4" id="linkimage">
            <img src="Images/l6.webp" alt="" />
          </div>
          <div className="col-8 p-2">
            <a href="/">Template: Featured Image </a>
          </div>
        </div> */}

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
