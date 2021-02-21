import jsonPlaceholder from '../apis/jsonPlaceholder';

//action creator for fetching posts
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({type: 'FETCH_POSTS', payload: response.data})
};

//action for selecting a post
export const selectPost = id => {
	return ({
		type: 'POST_SELECTED',
		payload: id
	})
}
