import React from 'react';

import LoadSytem from './LoadSystem';
import Intro from './Intro';

const Home = React.createClass({
	render() {
		return (
			<div>
				<LoadSystem />
				<Intro />
			</div>
		);
	}
});

export default Home;
