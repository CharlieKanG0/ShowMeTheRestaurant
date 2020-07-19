import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import { IRestaurant } from '../app/models/restaurant';
import { NavBar } from '../features/nav/NavBar';
import { RestaurantDashboard } from '../features/dashboard/RestaurantDashboard';
// import { RouteComponentProps, Redirect} from "react-router";
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';

export default function HomePage() {
	const [restaurants, setRestaurants] = useState<IRestaurant[]>([])

	useEffect(() => {
		axios.get<IRestaurant[]>('https://localhost:5001/GoogleReview/database')
			.then((response) => {
				setRestaurants(response.data)
			});
	}, []);

	return (
		<div>
			<NavBar />
			<Container style={{marginTop: '7em'}}>
				<RestaurantDashboard restaurants={restaurants}/>
			</Container>
		</div>
	);
}

//export default HomePage;
