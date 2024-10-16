import React from 'react'
import { BlogCard } from './BlogCard'
import { NavBar } from './navBar'

export const GraphQL = () => {
  return (
    <div>
      <NavBar />

      <div className='blogSection'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}
