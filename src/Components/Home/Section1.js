import React from 'react'

export const Section1 = () => {
  return (
    <div className='container p-3'>
        <div className='row p-3 mt-3'>
            <div className='col-md-7' id='img1'>
                <img src='mavbook1.png'/>
            </div>
            <div className='col-md-1'></div>
            <div className='col-md-4 p-3 mt-3' id='cont1'>
                <h3>SEO Friendly</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</p>
                <button className='btn1'>Read More</button>
            </div>
        </div>
    </div>
  )
}
