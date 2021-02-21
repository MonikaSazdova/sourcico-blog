import jsonPlaceholder from '../apis/jsonPlaceholder';

//action creator for fetching posts
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({type: 'FETCH_POSTS', payload: response.data})
};

//action for selecting a post
export const selectPost = post => {
	return ({
		type: 'POST_SELECTED',
		payload: post
	})
}

//action for fetching comments
export const fetchComments = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/comments?postId=${id}`);
	dispatch({type: 'FETCH_COMMENTS', payload: response.data})
}