import React from 'react';
import Frame from './layout/Frame';
// import Preload from './layout/Preload';
import Footer from './layout/Footer';

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
