import React from 'react'
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import BlogDatailsItem from './BlogDatailsItem';


const BlogDetailsPage = (props) => {
    const { detailsid } = useParams()
    console.log(props);
    // props.blog.find(blog => blog.detailsid === Id);
    const blog = props.blog.find((blog) => {
        return blog.id === detailsid
    })
    return (
        <BlogDatailsItem blog={blog} />
        // <div>
        //     {/* Blog Details: {detailsid} */}
        //     Blog Details: {blog.title}
        // </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blog: state.blogs
    };
}

export default connect(mapStateToProps)(BlogDetailsPage);
// const mapStateToProps = (state, ownProps) => {
//     console.log(ownProps.match.params.);
//     return {
//         blog: state.blogs
//     }
// }







// import React from 'react'
// import { connect } from "react-redux";
// import BlogDatailsItem from './BlogDatailsItem';

// const BlogDetailsPage = (props) => {
//     console.log(props);
//     return (
//         <BlogDatailsItem {...props.blog} />
//     )
// }

// const mapStateToProps = (state, props) => {
//     return {
//         blog: state.blogs.find((blog) => {
//             console.log(blog);
//             console.log(props.match);
//             return blog.id === props.match.params.id
//         })
//     }
// }

// export default connect(mapStateToProps)(BlogDetailsPage);