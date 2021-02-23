import React from 'react';
import { useSelector} from 'react-redux';
import Comments from './Comments'

const PostDetails = () => {
	const post = useSelector(state => state.selectedPost)
	if (!post) {
		return null;
	}

	return (
		<div className="post-details">
			<div className="post-content">
				<h3>{post.title.toUpperCase()}</h3>
				<p>{post.body}</p>
			</div>
			<div className="comments-detail">
				<Comments postId={post.id}/>
			</div>
		</div>
	)
}


export default PostDetails;

