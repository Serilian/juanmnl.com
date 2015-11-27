import React from 'react';
import Footer from './layout/Footer';
import Controls from './layout/Controls';
import Navbar from './layout/Navbar';

const App = (props) => {
  let title = 'Welcome to juanmnl.com v1.0.0';
	return (
		<div className="machine">
			<div className="interlace"></div>
			<div id="frame">
        <div id="screen" className="on">
          <div className="scan"></div>
          <p id="title-bar" className="center">{title}</p>
          <Navbar />
          <hr id="divider" />
          {this.props.children}
        </div>
        <Controls />
			</div>
			<Footer />
		</div>
	)
}
export default App;
