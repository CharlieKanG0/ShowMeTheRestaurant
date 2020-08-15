import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container } from 'semantic-ui-react'
import { IRestaurant } from '../models/restaurant';
import { NavBar } from '../../features/nav/NavBar';
import { RestaurantDashboard } from '../../features/dashboard/RestaurantDashboard';
// import { RouteComponentProps, Redirect} from "react-router";
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import { geolocated } from "react-geolocated";
import SearchPage from '../../pages/SearchPage';

export default class Frontend extends React.Component<RouteComponentProps> {

	public render() {
		const path = this.props.match.path === '/' ? '' : this.props.match.path;
		return (
			<>
				<Switch>
					{/* <Redirect exact={true} from={`/`} to={`${path}/home`} /> */}
					<Route exact={true} path='/' component={HomePage} />
					<Route path="/search" component={SearchPage} />
				</Switch>
			</>
		);
	}
}