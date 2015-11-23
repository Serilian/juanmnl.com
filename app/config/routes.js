import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './../components/App';
import NotFound from './../components/NotFound';
import About from './../components/screen/About';
import Home from './../components/screen/Home';

export default (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
		</Route>
	</Router>
);
