var React = require('react');

var Preload = React.createClass({
	render: function() {
		return (
			<div>
				<p id="preload">
				  Welcome to juanmnl.com :P
				  <br /> Please press &lt;&lt; ENTER
				  <small>(or touch)</small> &gt;&gt; to continue
				</p>

			</div>
		);
	}
});

module.exports = Preload;
