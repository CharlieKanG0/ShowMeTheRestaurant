import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import { IRestaurant } from '../models/restaurant';
import { NavBar } from '../../features/nav/NavBar';
import { RestaurantDashboard } from '../../features/dashboard/RestaurantDashboard';
//import { Router, Route, Switch } from "react-router";
import {Switch, Route } from 'react-router-dom';
import Frontend from './Frontend';


export default class App extends React.Component {

	// constructor(props: any, context: any) {
	// 	super(props, context);

	// 	// apollo client 
	// }

	public render() {

		return (
			<Switch>
				<Route path="/" component={Frontend} />
			</Switch>
		);

	}
}

// const App = () => {
// 	const [restaurants, setRestaurants] = useState<IRestaurant[]>([])

// 	useEffect(() => {
// 		axios.get<IRestaurant[]>('https://localhost:5001/GoogleReview/database')
// 			.then((response) => {
// 				setRestaurants(response.data)
// 			});
// 	}, []);

// 	// state: IState = {
// 	// 	activities: []
// 	// }

// 	// componentDidMount() {
// 	// 	axios.get<IActivity[]>('https://localhost:5001/GoogleReview')
// 	// 		.then((response) => {
// 	// 			this.setState({
// 	// 				activities: response.data
// 	// 			})
// 	// 		})
// 	// }


// 	return (
// 		<div>
// 			<NavBar />
// 			<Container style={{marginTop: '7em'}}>
// 				<RestaurantDashboard restaurants={restaurants}/>
// 			</Container>
// 		</div>
// 	);
// }

// export default App;
