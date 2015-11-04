require('./styles/main.css');

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

main();

function main() {
	var app = document.getElementById('app');
	ReactDOM.render(<App />, app);
}
