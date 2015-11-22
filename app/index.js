import './sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

main();

function main() {
	let app = document.getElementById('app');
	ReactDOM.render(<App />, app);
}
