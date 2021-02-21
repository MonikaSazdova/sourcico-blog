import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions'


class Comments extends React.Component {
	componentDidMount() {
		this.props.fetchComments(this.props.postId)
	}

	renderComments() {
		return this.props.comments.map(comment => {
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

	render() {
		return (
			<div className="comments">
				{this.renderComments()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {comments: state.comments}
}

export default connect(mapStateToProps, {fetchComments})(Comments);