import './sass/main.scss';

import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router';
import App from './components/App';

import routes from './config/routes';

main();

function main() {
	let app = document.getElementById('app');
	render(<Router routes={routes}/>, app);
}
