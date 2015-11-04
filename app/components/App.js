var React = require('react');

var Component = require('./Component');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello Stranger!</h1>
				<Component />
			</div>
		);
	}
});

module.exports = App;
