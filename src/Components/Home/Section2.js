import React from 'react'

export const Section2 = () => {
  return (
    <div className='container'>
        <div className='row p-3 mt-3'>
        <div className='col-md-4 p-3 mt-3' id='cont2'>
                <h3>Portfolio Section</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum.</p>
                <button className='btn1'>SEE IT IN ACTION</button>
            </div>
           
            <div className='col-md-1'></div>
            <div className='col-md-7' id='img1'>
                <img src='macbook2.png'/>
            </div>
        </div>
    </div>
  )
}
