import React from 'react'
import { NavBar } from './navBar'

export const AddNew = () => {
  return (
    <div>
      <NavBar />
      <form>
        <div className='addForm'>
          <div className='inputDivs'>
            <label>Enter Title</label>
            <input type='text' name='tiite' />
          </div>
          <div className='inputDivs'>
            <label>Author Name</label>
            <input type='text' name='author' />
          </div>
          <div className='inputDivs'>
            <label>Small Description</label>
            <input type='text' name='description' />
          </div>
          <div className='inputDivs'>
            <label>Article Content</label>
            <textarea name='content' />
          </div>
          <div className='inputDivs'>
            <label>Image</label>
            <input type='file' name='image' />
          </div>

        </div>
        <input type='submit' className='submitBTN' />
      </form>
    </div>
  )
}
