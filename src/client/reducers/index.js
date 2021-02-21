import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import postsReducer from './postsReducer';
import selectedPostReducer from './selectedPostReducer';

export default combineReducers({
	posts: postsReducer,
	selectedPost: selectedPostReducer,
	comments: commentsReducer
})