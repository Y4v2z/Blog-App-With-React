import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import "./App.css"
import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';


// Action CREATOR FUNCTION
const addBlog = ({ title = "", description = "", dateAdded = 0 }) => (
    {
        type: "ADD_BLOG",
        blog: {
            id: uuid(),
            title: title,
            description: description,
            dateAdded: dateAdded
        }
    }
)

const removeBlog = ({ id }) => ({
    type: "REMOVE_BLOG",
    id: id
})
const editBlog = (id, updates) => ({
    type: "EDİT_BLOG",
    id,
    updates
})
// Blog Reducer
const blogState = [];
const blogReducer = (state = blogState, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [
                ...state,
                action.blog
            ]
        case "REMOVE_BLOG":
            return state.filter(({ id }) => {
                return id !== action.id
            })
        case "REMOVE_BLOG":
            return state.filter(({ id }) => {
                return id !== action.id
            })
        case "EDİT_BLOG":
            return state.map((blog) => {
                if (blog.id === action.id) {
                    return {
                        ...blog,
                        ...action.updates
                    }
                }
            })

        default:
            return state
    }
}
// Auth Reducer
const authState = {
}
const authReducer = (state = authState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        blogs: blogReducer,
        auth: authReducer
    }));

store.subscribe(() => {
    console.log(store.getState());
})


const blog1 = store.dispatch(addBlog({ title: "Title 1", description: "description 1", dateAdded: Date.now() }))
const blog2 = store.dispatch(addBlog({ title: "Title 2", description: "description " }))
store.dispatch(removeBlog({ id: blog1.blog.id }))
store.dispatch(editBlog(blog2.blog.id, { title: "new title", description: "new description" }))






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
