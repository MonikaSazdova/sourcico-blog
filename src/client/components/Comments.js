import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../actions'

const Comments = ({postId}) => {
	const comments = useSelector(state => state.comments)
	const dispatch = useDispatch();
	
	useEffect(() => {
	  dispatch(fetchComments(postId))
	}, [postId])

	useEffect(() => {
		console.log(comments)
	}, [comments])

	const renderComments = () => {
		return comments.map(comment => {
			return (
				<div className="comment" key={comment.id}>
					<div className="content">
						<h5>{comment.name}</h5>
						<p>{comment.body}</p>
					</div>
					<hr />
				</div>
			)
		})
	}
	
	return (
		<div className="comments">
			{renderComments()}
		</div>
	)
}

export default Comments;
















//------------CLASS COMPONENTS------------------//
// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchComments } from '../actions'



// class Comments extends React.Component {
// 	componentDidUpdate(prevProps) {
// 		if (this.props.postId && this.props.postId !== prevProps.postId){
// 			this.props.fetchComments(this.props.postId)
// 		}
// 	}

// 	renderComments() {
// 		console.log(this.props.comments)
// 		return this.props.comments.map(comment => {
// 			return (
// 				<div className="comment" key={comment.id}>
// 					<div className="content">
// 						<h5>{comment.name}</h5>
// 						<p>{comment.body}</p>
// 					</div>
// 					<hr />
// 				</div>
// 			)
// 		})

// 	}

// 	render() {
// 		return (
// 			<div className="comments">
// 				{this.renderComments()}
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = state => {
// 	return {comments: state.comments}
// }

// export default connect(mapStateToProps, {fetchComments})(Comments);