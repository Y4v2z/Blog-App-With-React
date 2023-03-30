import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { editBlog, removeBlog } from '../actions/blogs'
import { useNavigate, useParams } from 'react-router'
const EditBlogPage = (props) => {
    const navigate = useNavigate()
    const { editid } = useParams()
    console.log(editid);
    const blog = props.blog.find((blog) => {
        return blog.id === editid
    })
    return (
        <div>
            <h1>Edit Page</h1>
            <BlogForm
                blog={blog}
                onSubmit={(blog) => {
                    props.dispatch(editBlog(editid, blog))
                    navigate("/blogs");
                }}
            />
            <button onClick={() => {
                props.dispatch(removeBlog({ id: editid }))
                navigate("/blogs");
            }} >Delete Item</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blog: state.blogs
    }
}

export default connect(mapStateToProps)(EditBlogPage)
