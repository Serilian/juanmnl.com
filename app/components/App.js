var React = require('react');
var Frame = require('./Frame');
var Preload = require('./Preload');
var Footer = require('./Footer');

var App = React.createClass({
	render: function() {
		return (
			<div className="machine">
				<div className="interlace"></div>
				{/*<Preload />*/}
				<Frame />
				<Footer />
			</div>
		);
	}
});

module.exports = App;
