var React = require('react');

var Messages = React.createClass({
	render: function() {
		return (
			<div>
				<p id="loading">
				  Loading Message...
				</p>

				<p id="error">
				  <span className="danger">
				    ++ ERROR MESSAGE ++ <br />
				    ++ SYSTEM CORRUPTED ++ <br />
				    ----------------------
				  </span>
				</p>

				<p id="serverReady"><small><span className="ok">SYSTEM RUNNING...</span></small></p>

				<small className="thinking">&gt;<span className="blink">_</span></small>
			</div>
		);
	}
});

module.exports = Messages;
