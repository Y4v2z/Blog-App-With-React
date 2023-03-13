import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogDetailsPage from '../components/BlogDetailsPage'
import BlogListPage from '../components/BlogListPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import NotFound from '../components/NotFound'
import CantactPage from '../components/CantactPage'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/blogs" component={BlogListPage} exact />
                    <Route path="/create" component={AddBlogPage} />
                    <Route path="/edit/:id" component={EditBlogPage} />
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={CantactPage} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter