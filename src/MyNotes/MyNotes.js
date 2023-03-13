import React from 'react';
import { createStore } from 'redux';


// const initialState = {
//     count: 0
// }
// Create Store
// const store = createStore((state = initialState, action) => {
//     return state
// })
// const store = createStore((state = initialState, action) => {
//     switch (action.type) {
//         case "İNCREMENT":
//             const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1; Burada incremenetBy ataması bu şekilde yapılır.Anlamı: dispatc içinden rakam geliyorsa incremenetBy kafar gelmiyorsa 1 arttır demek.
//             return {
//                 count: state.count + incrementBy
//             }
//         case "DECREMENT":
//             return {
//                 count: state.count - 6
//             }
//         case "RESET":
//             return {
//                 count: 0
//             }
//         default:
//             return state

//     }
// })

// Get Store
// console.log(store.getState()); store.getState ile state ulaşıırız.

// State i değiştirmek istersek;
// İncrement, decrement, reset (bunların hepsi ACTİON)




// SUBSCRİBE state ne zaman değiştirilirse consol o zaman ve o kadar çalıştırılır.
// store.subscribe(() => {
//     console.log(store.getState());
// })




// DİSPATCH
// Dispatch bu şekilde yazılır.
// store.dispatch({
//     type: "İNCREMENT"
// })
// store.dispatch({
//     type: "DECREMENT"
// })
// store.dispatch({
//     type: "RESET"
// })
// store.dispatch({
//     type: "İNCREMENT",
//     incrementBy: 10
// })
// store.dispatch({
//     type: "RESET"
// })
// console.log(store.getState());



// ************
// const state = {
//     blogs: [
//         {
//             id: 1,
//             title: "Blog Title 1",
//             description: "Blog Description 1",
//             dateAdded: 0
//         }
//     ],
//     auth: {
//         userid: 1,
//         username: "Yavuz Avci",
//         email: "yavuzavci01@gmail.com"
//     }
// }
// // Blog Reducer
// const blogState = [
// ];
// const blogReducer = (state = blogState, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// }
// // Auth Reducer
// const authState = {
// }
// const authReducer = (state = authState, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// }

// const store = createStore(
//     combineReducers({
//         blogs: blogReducer,
//         auth: authReducer
//     }));

// store.subscribe(() => {
//     console.log(store.getState());
// })
// console.log(store.getState());

// *********************


// Action CREATOR FUNCTION
// const addBlog = ({ title = "", description = "", dateAdded = 0 }) => (
//     {
//         type: "ADD_BLOG",
//         blog: {
//             id: uuid(),
//             title: title,
//             description: description,
//             dateAdded: dateAdded
//         }
//     }
// )

// // Blog Reducer
// const blogState = [
// ];
// const blogReducer = (state = blogState, action) => {
//     switch (action.type) {
//         case "ADD_BLOG":
//             return [
//                 ...state,
//                 action.blog
//             ]
//         default:
//             return state
//     }
// }
// // Auth Reducer
// const authState = {
// }
// const authReducer = (state = authState, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// }

// const store = createStore(
//     combineReducers({
//         blogs: blogReducer,
//         auth: authReducer
//     }));

// store.subscribe(() => {
//     console.log(store.getState());
// })


// store.dispatch(addBlog({ title: "Title 1", description: "description 1", dateAdded: Date.now() }))
// store.dispatch(addBlog({ title: "Title 2", description: "description " }))




// *****************************************
// Action CREATOR FUNCTION
// const addBlog = ({ title = "", description = "", dateAdded = 0 }) => (
//     {
//         type: "ADD_BLOG",
//         blog: {
//             id: uuid(),
//             title: title,
//             description: description,
//             dateAdded: dateAdded
//         }
//     }
// )

// const removeBlog = ({ id }) => ({
//     type: "REMOVE_BLOG",
//     id: id
// })
// const editBlog = (id, updates) => ({
//     type: "EDİT_BLOG",
//     id,
//     updates
// })
// // Blog Reducer
// const blogState = [];
// const blogReducer = (state = blogState, action) => {
//     switch (action.type) {
//         case "ADD_BLOG":
//             return [
//                 ...state,
//                 action.blog
//             ]
//         case "REMOVE_BLOG":
//             return state.filter(({ id }) => {
//                 return id !== action.id
//             })
//         case "REMOVE_BLOG":
//             return state.filter(({ id }) => {
//                 return id !== action.id
//             })
//         case "EDİT_BLOG":
//             return state.map((blog) => {
//                 if (blog.id === action.id) {
//                     return {
//                         ...blog,
//                         ...action.updates
//                     }
//                 }
//             })

//         default:
//             return state
//     }
// }
// // Auth Reducer
// const authState = {
// }
// const authReducer = (state = authState, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// }

// const store = createStore(
//     combineReducers({
//         blogs: blogReducer,
//         auth: authReducer
//     }));

// store.subscribe(() => {
//     console.log(store.getState());
// })


// const blog1 = store.dispatch(addBlog({ title: "Title 1", description: "description 1", dateAdded: Date.now() }))
// const blog2 = store.dispatch(addBlog({ title: "Title 2", description: "description " }))
// store.dispatch(removeBlog({ id: blog1.blog.id }))
// store.dispatch(editBlog(blog2.blog.id, { title: "new title", description: "new description" }))






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppRouter />);
