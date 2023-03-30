import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { addBlog } from '../actions/blogs'
import { useNavigate } from 'react-router'

const AddBlogPage = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Add Blog</h1>
            <BlogForm onSubmit={(blog) => {
                console.log(blog);
                props.dispatch(addBlog(blog))
                navigate("/blogs")
            }} />
        </div>
    )
}

export default connect()(AddBlogPage)


