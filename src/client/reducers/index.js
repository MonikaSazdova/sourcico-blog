import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import selectedPostReducer from './selectedPostReducer';

export default combineReducers({
	posts: postsReducer,
	selectedPost: selectedPostReducer
})