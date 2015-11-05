var React = require('react');

var Screen = require('./Screen');
var Controls = require('./Controls');

var Frame = React.createClass({
	render: function() {
		return (
			<div id="frame">
				<Screen />
				<Controls />
			</div>
		);
	}
});

module.exports = Frame;
