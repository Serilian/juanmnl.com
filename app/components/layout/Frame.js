import React from 'react';

import Screen from './Screen';
import Controls from './Controls';

const Frame = React.createClass({
	render() {
		return (
			<div id="frame">
				<Screen />
				<Controls />
			</div>
		);
	}
});

export default Frame;
