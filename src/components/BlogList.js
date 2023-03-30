import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";

const BlogList = (props) => {
    return (
        <ul >
            {props.blogs.map(blog => {
                return <BlogListItem key={blog.id} {...blog} />
            })}
        </ul>
    );
}
const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}
// Higher Order Component (HOC)
export default connect(mapStateToProps)(BlogList);


// import React from "react";
// import { connect } from "react-redux";
// import BlogListItem from "./BlogListItem";

// const BlogList = (props) => {
//     console.log(props);
//     return (
//         <ul>
//             {props.blogs.map((blog, index) => {
//                 return <BlogListItem key={index} {...blog} />
//             })}
//         </ul>
//     );
// }
// const mapStateToProps = (state) => {
//     return {
//         blogs: state.blogs
//     }
// }
// // Higher Order Component (HOC)
// export default connect(mapStateToProps)(BlogList);