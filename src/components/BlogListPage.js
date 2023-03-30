import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from './BlogList'

const BlogListPage = () => {
    return (
        <div>
            <p>Blog List</p>
            {/* <Link to="/blogdetails/1" >Blog 1</Link>
            <Link to="/blogdetails/2">Blog 2</Link> */}
            <BlogList />
        </div>
    )
}

export default BlogListPage