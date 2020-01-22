import React, { Suspense, lazy } from 'react';
import RotateCircleLoading from 'react-loading';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const Routes: React.FC = () => {
	return (
		<Router>
			<Suspense fallback={<RotateCircleLoading />}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</Switch>
				<Navbar />
			</Suspense>
		</Router>
	);
};

export default Routes;
