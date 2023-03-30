// // import React, { Children } from 'react'
// import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Switch } from 'react-router-dom'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BlogDetailsPage from '../components/BlogDetailsPage'
import BlogListPage from '../components/BlogListPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import NotFound from '../components/NotFound'
import CantactPage from '../components/CantactPage'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "blogs", element: <BlogListPage /> },
            { path: "create", element: <AddBlogPage /> },
            { path: "edit/:editid", element: <EditBlogPage /> },
            { path: "blogdetails/:detailsid", element: <BlogDetailsPage /> },
            { path: "contact", element: <CantactPage /> },
            { path: "*", element: <NotFound /> }
        ]
    }
])


const AppRouter = () => {

    return (
        <RouterProvider router={router} />
    );
}
export default AppRouter;



// const AppRouter = () => {
//     return (
//         <BrowserRouter>
//             <div>
//                 <Header></Header>
//                 <Switch>
//                     <Route path="/" component={HomePage} exact />
//                     <Route path="/blogs" component={BlogListPage} exact />
//                     <Route path="/create" component={AddBlogPage} />
//                     <Route path="/edit/:id" component={EditBlogPage} />
//                     <Route path="/blogs/:id" component={BlogDetailsPage} />
//                     <Route path="/contact" component={CantactPage} />
//                     <Route component={NotFound} />
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     )
// }

// export default AppRouter