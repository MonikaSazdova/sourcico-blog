/* eslint-disable import/no-anonymous-default-export */
export default (selectedPost = null, action) => {
	if (action.type === 'POST_SELECTED') {
		return action.payload;
	}
	return selectedPost;
}