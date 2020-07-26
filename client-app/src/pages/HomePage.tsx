import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import { IRestaurant } from '../app/models/restaurant';
import { NavBar } from '../features/nav/NavBar';
import { RestaurantDashboard } from '../features/dashboard/RestaurantDashboard';
// import { RouteComponentProps, Redirect} from "react-router";
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import { SearchResponse } from '../app/models/SearchResponse';

export default function HomePage() {
	// const [restaurants, setRestaurants] = useState<IRestaurant[]>([])

	// useEffect(() => {
	// 	axios.get<IRestaurant[]>('https://localhost:5001/GoogleReview/database')
	// 		.then((response) => {
	// 			setRestaurants(response.data)
	// 		});
	// }, []);

	const [restaurants, setRestaurants] = useState();
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		axios.get('https://localhost:5001/YelpReview/yelp-search')
			.then((response) => {
				setRestaurants(response.data);
				setLoad(true);
			})
			.catch(err => {
				setError(err.message);
				setLoad(true);
			});
	}, []);

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
                Loading...
            </div>
        );
	}


}

//export default HomePage;
