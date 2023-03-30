import React from 'react'

const BlogDatailsItem = ({ blog }) => {
    return (
        <div>
            <p>Blog id: {blog.id}</p>
            <p>Blog title: {blog.title}</p>
            <p>Blog description: {blog.description}</p>
        </div>
    )
}

export default BlogDatailsItem