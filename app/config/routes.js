import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './../components/App';
import NotFound from './../components/NotFound';
import About from './../components/screens/About';
import Contact from './../components/screens/Contact';
import Home from './../components/screens/Home';

export default (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={NotFound} />
		</Route>
	</Router>
);
