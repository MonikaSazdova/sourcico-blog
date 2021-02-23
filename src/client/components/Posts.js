import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPost } from '../actions';
import '../styles/posts.scss';

const Posts = () => {
	const posts = useSelector(state => state.posts)
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchPosts());
	}, [])

	const renderPosts = () => { 
		return posts.map(post => {
			if (post.id <= 15) {
						return (
							<div
								className='item'
								key={post.id}
								onClick={() => {dispatch(selectPost(post)) }}
							>
								<div className="title">
									<h5>{post.title.charAt(0).toUpperCase(0) + post.title.slice(1)}</h5>
								</div>
							</div>
						)
					}
				})
		}


	return (
		<div className="list">
			{renderPosts()}
		</div>
	)
	
}

export default Posts;


//----------CLASS COMPONENTS ----------------
// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchPosts, selectPost } from '../actions';
// import '../styles/posts.scss';


// class Posts extends React.Component {
// 	componentDidMount() {
// 		this.props.fetchPosts()
// 	}

// 	renderPosts() {
// 		return this.props.posts.map(post => {
// 			if (post.id <= 10) 				
// 			return (
// 				<div className='item' key={post.id}>
// 					<div className="title">
// 						<h4>{post.title}</h4>
// 					</div>
// 					<button
// 						onClick={() => {
// 							this.props.selectPost(post)
// 							console.log(post)
// 						}
// 					}>Open</button>
// 					<hr/>
// 				</div>
// 				)
			
// 		})
// 	}

// 	render() {
// 		return(
// 			<div className="list">
// 				{ this.renderPosts() }
// 			</div>
// 		)
// }
	
// }

// const mapStateToProps = state => {
// 	return {
// 		posts: state.posts,
// 		selectedPost: state.post
// 	}
// };

// const mapDispatchToProps = {
// 	fetchPosts,
// 	selectPost
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Posts);