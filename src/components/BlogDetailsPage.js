import React from 'react'
import { connect } from "react-redux";
import BlogDatailsItem from './BlogDatailsItem';

const BlogDetailsPage = (props) => {
    console.log(props);
    return (
        <BlogDatailsItem {...props.blog} />
    )
}

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find((blog) => {
            return blog.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(BlogDetailsPage);