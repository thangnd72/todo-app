
import { ADD_BLOGPOSTS, DELETE_BLOGPOST, EDIT_BLOGPOST } from '../store/ActionType'
import { initialValues as initialState } from '../store/InitialState'


const blogReducer = (state = initialState, action) => {
    let tmpState = [...state];
    switch (action.type) {

        case ADD_BLOGPOSTS:
            const newBlog = {...action.blog, id: tmpState.length + 1}
            tmpState = [...tmpState, newBlog]
            return tmpState;

        case DELETE_BLOGPOST:
            tmpState = tmpState.filter(blogPost => blogPost.id !== action.payload)
            return tmpState

        case EDIT_BLOGPOST:
            const index = tmpState.findIndex(elem => elem.id === action.payload.id)
            if(index !== -1) {
                tmpState[index] = action.payload;
            }
            return tmpState

        default:
            return state
    }

}



export const addBlogPost = (blog) => {
    return { type: ADD_BLOGPOSTS, blog}
}

export const deleteBlogPost = id => {
    return { type: DELETE_BLOGPOST, payload: id }
}
export const editBlogPost = (blog) => {
    // console.log('AA', blog);
    return { type: EDIT_BLOGPOST, payload: blog}
}

export default blogReducer;