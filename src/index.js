import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import "./App.css"
import configureStore from './store/configureStore';
import { addBlog, removeBlog, editBlog, getBlogById } from "./actions/blogs"
import "./firebase/firebaseConfig"
const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
})


// const blog1 = store.dispatch(addBlog({ title: "Title 1", description: "description 1", dateAdded: Date.now() }))
// const blog2 = store.dispatch(addBlog({ title: "Title 2", description: "description " }))
// store.dispatch(removeBlog({ id: blog1.blog.id }))
// store.dispatch(editBlog(blog2.blog.id, { title: "new title", description: "new description" }))

store.dispatch(addBlog({ title: "Title 1", description: "description 1", dateAdded: Date.now() }))
store.dispatch(addBlog({ title: "Title 2", description: "description 2" }))
store.dispatch(addBlog({ title: "Title 3", description: "description 3" }))
store.dispatch(addBlog({ title: "Title 4", description: "description 4" }))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store} ><AppRouter /> </Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
