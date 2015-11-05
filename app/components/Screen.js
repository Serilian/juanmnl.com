var React = require('react');

var Messages = require('./Messages');
var Text = require('./Text');

var Screen = React.createClass({
	render: function() {
		return (
			<div id="screen" className="on">
				<div className="scan"></div>

			  <p id="title-bar" className="center">
			    Welcome to juanmnl.com V0.1.0<i><small>alpha *May contain some Reactjs</small></i>
			  </p>

			  <hr id="divider" />
				<Messages />
				<Text />
			</div>
		);
	}
});

module.exports = Screen;
