import React from 'react';
import PostDetails from './PostDetails';
// import Comments from './Comments';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import '../styles/posts.scss';


class Posts extends React.Component {
	componentDidMount() {
		//call an action creator to fetch data
		this.props.fetchPosts()
		//api call responds with list of posts
		//action creator returns an action with the fetched data
		//a reducer sees the action and returns the data from payload
	}

	renderPosts() {
		return this.props.posts.map(post => {
			return (
				<div className='item' key={post.id}>
					<div className="title">
						<h4>{post.title}</h4>
						</div>
					<button
						onClick={() => this.props.selectPost(post)}
					>Open</button>
					<hr/>
				</div>
			)
		})
	}

	render() {
		return(
			<div className="list">
				{ this.renderPosts() }
			</div>
		)
}
	
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
		selectedPost: state.post
	}
};



export default connect(mapStateToProps, {fetchPosts})(Posts);