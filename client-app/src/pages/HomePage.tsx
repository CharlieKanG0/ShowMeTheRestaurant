import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import { IRestaurant } from '../app/models/restaurant';
import { NavBar } from '../features/nav/NavBar';
import { RestaurantDashboard } from '../features/dashboard/RestaurantDashboard';
// import { RouteComponentProps, Redirect} from "react-router";
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import { SearchResponse } from '../app/models/SearchResponse';
import { GeolocatedProps, geolocated } from "react-geolocated";
import { SelectCategories } from '../features/dashboard/SelectCategories';

const HomePage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

	const {
		history, location, match, staticContext,
	} = props; 

	return (
		<div>
			<NavBar />
			<Container style={{ marginTop: '7em' }}>
				<SelectCategories />
			</Container>
		</div>
	);

}

export default HomePage;
