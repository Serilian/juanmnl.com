import React from 'react';
import Navbar from './../layout/Navbar';
import Load from './../screen/LoadSystem';
import Intro from './../screen/Intro';

const Screen = React.createClass({
	render() {
		return (
			<div id="screen" className="on">
				<div className="scan"></div>

				<p id="title-bar" className="center">
					Welcome to juanmnl.com V0.1.0<i><small>alpha *May contain some Reactjs</small></i>
				</p>
				<Navbar />
				<hr id="divider" />
				{this.props.children}
			</div>
		);
	}
});

export default Screen;
