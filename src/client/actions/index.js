import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({type: 'FETCH_POSTS', payload: response.data})
};


export const selectPost = post => {
	return ({
		type: 'POST_SELECTED',
		payload: post
	})
}


export const fetchComments = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/comments?postId=${id}`);
	dispatch({type: 'FETCH_COMMENTS', payload: response.data})
}