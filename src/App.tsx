import React from 'react';
import './App.css';
import Routes from './Routes';
import { Grid } from '@material-ui/core';

const App: React.FC = () => {
	return (
		<Grid container spacing={3}>
			<Routes />
		</Grid>
	);
};

export default App;
