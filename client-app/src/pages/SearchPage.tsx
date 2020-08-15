import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import { IRestaurant } from '../app/models/restaurant';
import { NavBar } from '../features/nav/NavBar';
import { RestaurantDashboard } from '../features/dashboard/RestaurantDashboard';
// import { RouteComponentProps, Redirect} from "react-router";
import { BrowserRouter, Switch, Route, RouteComponentProps, useLocation } from 'react-router-dom';
import { SearchResponse } from '../app/models/SearchResponse';
import { GeolocatedProps, geolocated } from "react-geolocated";
import { SelectCategories } from '../features/dashboard/SelectCategories';

const HomePage: React.FC<GeolocatedProps> = ({ coords }) => {

	const location = useLocation(); 

	//const [coordinate, setCoordinate] = useState({...coords})
	const [restaurants, setRestaurants] = useState();
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		axios.get('https://localhost:5001/YelpReview/yelp-search', {
			params: {
				latitude: coords?.latitude || -27.46,
				longtitude: coords?.longitude || 153.05,
				categories: location?.state
			}
		}).then((response) => {
			setRestaurants(response.data);
			setLoad(true);
		}).catch(err => {
				setError(err.message);
				setLoad(true);
			});
	}, [location]);

	if (load) {
		return (
			<div>
				<NavBar />
				<Container style={{ marginTop: '7em' }}>
					{error ? <div>{error}</div> :
						<RestaurantDashboard restaurants={restaurants!} />}
				</Container>
			</div>
		);
	} else {
		return (
			<div>
				latitude: {coords?.latitude}
				longtitude: {coords?.longitude}
			</div>
		);
	}

}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: true,
	},
	userDecisionTimeout: 5000,
})(HomePage);

//export default HomePage;
