import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../style/css/style.css';
import Header from './partials/Header';
import HomePage from './pages/HomePage/HomePage';
import Skills from './pages/Skills/Skills';
import Static from './pages/Static';
import Footer from './partials/Footer';

function App() {
  	return (
    	<React.Fragment>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/skills' component={Skills} />
					<Route path='/static' component={Static} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</React.Fragment>
  	);
}

export default App;
