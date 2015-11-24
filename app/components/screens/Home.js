import React from 'react';

import LoadSystem from './LoadSystem';
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
