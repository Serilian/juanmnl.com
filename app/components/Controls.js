var React = require('react');

var Controls = React.createClass({
	render: function() {
		return (
			<div>
				<aside className="controls on">

				  <a href="#" id="switch" className="button switch-on">Screen</a>

				  <div className="separator"> EXTERNAL LINKS </div>

				  <a className="button" target="_blank" href="http://hoverboard.io/juanmnl">CV</a>
				  <a className="button" target="_blank" href="https://twitter.com/_juanmnl">Twitter</a>
				  <a className="button" target="_blank" href="https://github.com/juanmnl">Github</a>
					<a className="button" target="_blank" href="http://juanmnlcornejo.com">Design</a>
				  <a className="button" target="_top" href="mailto:juanmnl@me.com?subject=Hello">Send email</a>

				</aside>

			</div>
		);
	}
});

module.exports = Controls;
