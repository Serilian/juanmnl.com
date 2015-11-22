import React from 'react';
import Frame from './Frame';
// import Preload from './Preload';
import Footer from './Footer';

const App = React.createClass({
	render() {
		return (
			<div className="machine">
				<div className="interlace"></div>
				<Frame />
				<Footer />
			</div>
		);
	}
});

export default App;
