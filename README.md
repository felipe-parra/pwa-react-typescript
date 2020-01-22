## From create-react-app to PWA

### From console to web app

Create project, do not forget add ```--template typescript``` at the end.
````
npx create-react-app pwa-react-typescript --template typescript
````

This builds a React web app built with TypeScript. It can be tested locally with.

````
cd pwa-react-typescript
yarn start
````

Open the file ```index.tsx``` in your created project:

````
serviceWorker.unregister();
````

Swap ```serviceWorker.unregister()```for ```serviceWorker.register()```and now you have a PWA.

Now add react-router, the de facto routing solution for React and the required type definitions for TypeScript:

```
yarn add react-router-dom @types/react-router-dom
```

Create file ```Routes.tsx``` in ```/src``` folder, with this config:

```typescript
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

const Routes: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</Switch>
		</Router>
	);
};

export default Routes;

```

Add this file ```Routes.tsx``` to ```App.tsx```

```typescript
import React from 'react';
import Routes from './Routes';

const App: React.FC = () => {
	return (
			<Routes />
	);
};

export default App;
```

Create components ```Home``` and ```About``` in ```/src/pages``` folder, like this:

```typescript
import React from 'react';

const Home: React.FC = () => {
	return (
		<div>
			Home Page
		</div>
	);
};

export default Home;
```

```Home.tsx``` 


```typescript
import React from 'react';

const About: React.FC = () => {
	return (
		<div>
			About Page
		</div>
	);
};

export default About;
```

```About.tsx``` 


Replace the ```App.test.tsx``` with this:

```typescript
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/about/i);
	expect(linkElement).toBeInTheDocument();
});

```

### Code splitting

Going to change ```Routes.tsx```
Where previously had:

```typescript
import About from "./components/About"
import Home from  "./components/Home"
```

Let's replace it with:

```javascript
const About = lazy(() => import('./components/About'))
const Home = lazy(() => import('./components/Home'))
```
remenber import ```lazy``` from react if not auto-import


Add ```<Suspense>``` component inside our ```<Router>``` component, like this:
Wrapped ```<Switch>``` and ```<Route>``` components

```javascript
<Router>
	<Suspense fallback={<div>Loading...</div>}>
	{/*...*/}
	</Suspense>
</Router>
```


Too remenber import ```Suspense``` from react if not auto-import

```Routes.tsx``` be look like this:

```typescript
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

```

