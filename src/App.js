import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import $ from "jquery";
import About from './components/About';
import Project from './components/Project';
import Publication from './components/Publication';

window.$ = window.jQuery = $;


class App extends Component {
	componentDidMount() {
		$(document).foundation();
	}

	render() {
		return(
			<HashRouter>
				<div className="grid-container">
					<div className="top-bar">
						<div className="top-bar-right">
							<ul className="dropdown menu" data-dropdown-menu>
								<li> <NavLink to="/">ABOUT</NavLink></li>
								<li> <NavLink to="/project">PROJECT</NavLink></li>
								<li> <NavLink to="/publication">PUBLICATION</NavLink></li>
							</ul>
						</div>
					</div>

					<div className="content">
						<Route exact path="/" component={About} />
						<Route path="/project" component={Project} />
						<Route path="/publication" component={Publication} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
