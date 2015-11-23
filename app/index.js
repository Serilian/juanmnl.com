import './sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import App from './components/App';

import routes from './config/routes';

main();

function main() {
	let app = document.getElementById('app');
	ReactDOM.render(<Router routes={routes}/>, app);
}
