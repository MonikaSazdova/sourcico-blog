import React from 'react';
import Posts from './Posts';
import Header from './Header';
import Footer from './Footer';
import '../styles/app.scss';
import PostDetails from './PostDetails';

const App = () => {
	return (
		<div className="container">
			<Header />
			<div><Posts /></div>
			<div><PostDetails /></div>
			<Footer />
		</div>
	)
}

export default App;