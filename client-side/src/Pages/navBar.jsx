import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className='BlogNav'>
            <h2>GraphQL</h2>
            <div className='navLinks'>
                <Link to='/'><h4>Blogs</h4></Link>
                <Link to='/addnew' ><h4>Add New</h4></Link>
            </div>
        </nav>
    )
}
