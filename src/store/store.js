import { combineReducers,createStore } from 'redux';

import blogReducer from './Reducer'

const allReducers = combineReducers({
    blogPosts: blogReducer,
})

const store = createStore(
    allReducers,
)

store.subscribe(()=>console.log(store.getState()))

export default store;
