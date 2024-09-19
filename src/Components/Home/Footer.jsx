import React from 'react'

export const Footer = () => {
  return (
    <div className='fot'>
        {/* <div className='like'>
        <h1>Do you like this awesome WordPress theme?</h1>
        <button className='btn5'>Download Now</button>
        </div> */}


        <div className='container-fluid bg-dark mt-3'>
            <div className='row'>
                <div className='col-md-6'>
                   <div className='footer'>
            <p>Theme by Colorlib Powered by WordPress</p>
            </div>
                </div>
                <div className='col-md-6'>
                    <div className='icon'>
                    <a href='/'><i class="fa-brands fa-facebook-f"></i></a>
                    <a href='/'><i class="fa-brands fa-twitter"></i></a>
                    <a href='/'><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href='/'><i class="fa-brands fa-square-youtube"></i></a>
                    <a href='/'><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}
