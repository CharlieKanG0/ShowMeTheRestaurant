import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Icon, List, Container, TextArea, Search, Button, Grid } from 'semantic-ui-react'
import { IRestaurant } from '../app/models/restaurant';
import { NavBar } from '../features/nav/NavBar';
import { RestaurantDashboard } from '../features/dashboard/RestaurantDashboard';
// import { RouteComponentProps, Redirect} from "react-router";
import { BrowserRouter, Switch, Route, RouteComponentProps, useLocation } from 'react-router-dom';
import { SearchResponse } from '../app/models/SearchResponse';
import { GeolocatedProps, geolocated } from "react-geolocated";
import { SelectCategories } from '../features/dashboard/SelectCategories';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage: React.FC<GeolocatedProps> = ({ coords }) => {

	let location = useLocation();

	//const [coordinate, setCoordinate] = useState({...coords})
	const [area, setArea] = useState('Sunny Bank');
	const [restaurants, setRestaurants] = useState();
	const [load, setLoad] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		loadMore'();
	}, []);

	function loadMore() {
		axios.get('https://localhost:5001/YelpReview/yelp-search', {
			params: {
				latitude: coords?.latitude || -27.46,
				longtitude: coords?.longitude || 153.05,
				categories: location?.state,
				location: area
			}
		}).then((response) => {
			setRestaurants(response.data);
			setLoad(true);
		}).catch(err => {
			setError(err.message);
			setLoad(true);
		});
	}


	function getSearchParams() {
		let params = {};
		params['location'] = area; 

		return params;
	}

	function handleChange(event: any) {
		setArea(event.target.value)
	}

	if (load) {
		return (
			<div>
				<NavBar />
				<Container style={{ marginTop: '7em' }}>
					<div>
						<input type='text' onChange={handleChange} placeholder='Near...'></input>
						{/* <TextArea placeHolder='Near...' onChange={handleChange} /> */}
						<Button icon onClick={loadMore}>
							<Icon name='search' />
						</Button>
					</div>

					{/* <Search
						loading={true}
						onResultSelect={(e, data) =>
							dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
						}
						onSearchChange={handleSearchChange}
						results={results}
						value={value}
					/> */}
					{error ? <div>{error}</div> :
						<>
							<InfiniteScroll
								dataLength={40} //This is important field to render the next data
								next={loadMore}
								hasMore={true}
								loader={<h4>Loading...</h4>}
								endMessage={
									<p style={{ textAlign: 'center' }}>
										<b>Yay! You have seen it all</b>
									</p>
								}
							// below props only if you need pull down functionality
							>
								<RestaurantDashboard restaurants={restaurants!} />
							</InfiniteScroll>
						</>

					}
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
