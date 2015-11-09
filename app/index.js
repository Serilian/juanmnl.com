require('./sass/main.scss');

var React = require('react');
// temp
var $ = require('jquery');
var ReactDOM = require('react-dom');
var App = require('./components/App');

main();

function main() {
	var app = document.getElementById('app');
	ReactDOM.render(<App />, app);
}
