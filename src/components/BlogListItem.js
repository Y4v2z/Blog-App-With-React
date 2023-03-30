import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ title, id }) => {
    return (
        <>
            <li >
                {title}-<Link to={`/blogdetails/${id}`} >Go Details</Link> - <Link to={`/edit/${id}`} >Edit</Link>
            </li>
        </>
    )
}
export default BlogListItem

// import React from 'react'
// import { Link } from 'react-router-dom'

// const BlogListItem = ({ id, title }) => {
//     return (
//         <>
//             <li>
//                 {title}-<Link to={`/blogs/${id}`}>Details</Link>-<Link to={`/edit/${id}`}>Edit</Link>
//             </li>
//         </>
//     )
// }
// export default BlogListItem