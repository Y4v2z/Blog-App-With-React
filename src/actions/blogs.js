import { v4 as uuid } from 'uuid';
// Action CREATOR FUNCTION
export const addBlog = ({ title = "", description = "", dateAdded = 0 }) => (
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
export const removeBlog = ({ id }) => ({
    type: "REMOVE_BLOG",
    id: id
})
export const editBlog = (id, updates) => ({
    type: "EDİT_BLOG",
    id,
    updates
})
