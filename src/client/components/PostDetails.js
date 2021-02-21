import React from 'react';
import { connect } from 'react-redux';
import Comments from './Comments'

const PostDetails = ({ post }) => {
	if (!post) {
		return <div>Select a post</div>
	}
	return (
		<div className="post-details">
			<div className="post-content">
				<h3>{post.title}</h3>
				<p>{post.body}</p>
				<hr/>
			</div>
			<div className="comments-detail">
				<Comments postId={post.id}/>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {post: state.selectedPost}
}


export default connect(mapStateToProps)(PostDetails);

//dali vo state ima post 