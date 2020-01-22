import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { BottomNavigationAction, BottomNavigation, Grid } from '@material-ui/core';
import { Favorite as FavoriteIcon, Home as HomeIcon, LocationOn as LocationOnIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
		flexDirection: 'row'
	},
	links: {
		color: 'inherit',
		textDecoration: 'none'
	}
}));

const Navbar: React.FC = () => {
	const classes = useStyles();
	const [ value, setValue ] = useState(0);
	return (
		<Grid item xs={12} sm={12} lg={12}>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
				className={classes.root}
			>
				<BottomNavigationAction
					label="Home"
					icon={
						<Link className={classes.links} to="/">
							<HomeIcon />
						</Link>
					}
				/>
				<BottomNavigationAction
					label="About"
					icon={
						<Link className={classes.links} to="/about">
							<FavoriteIcon />
						</Link>
					}
				/>
				<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
			</BottomNavigation>
		</Grid>
	);
};

export default Navbar;
