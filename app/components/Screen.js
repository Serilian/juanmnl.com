import React from 'react';
import Messages from './Messages';
import Text from './Text';

const Screen = React.createClass({
	render() {
		return (
			<div id="screen" className="on">
				<div className="scan"></div>

				<p id="title-bar" className="center">
					Welcome to juanmnl.com V0.1.0<i><small>alpha *May contain some Reactjs</small></i>
				</p>

				<hr id="divider" />
				{this.props.children}
				<Messages />
				<Text />
			</div>
		);
	}
});

export default Screen;
