import React from 'react'
import logo from '../logo.svg'

export const BlogCard = () => {
  return (
    <div className='blogCard'>
        <img className='blogCardImg' src={logo} alt='Image Not Available'/>
        <div className='blogCard-title'>
          <h3>React Blog</h3>
          <p>this is the Small Description of the Blogs card</p>
          <p>02/02/2024</p>
        </div>
    </div>
  )
}