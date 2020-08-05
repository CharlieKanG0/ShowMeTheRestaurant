import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { IRestaurant } from '../../app/models/restaurant'
import { RestaurantList } from './RestaurantList'
import { SearchResponse } from '../../app/models/SearchResponse'

interface IProps {
	restaurants: SearchResponse
}

export const RestaurantDashboard: React.FC<IProps> = ({restaurants}) => {

	let categories: string[] = [];

	restaurants.businesses.map(restaurant => (
		restaurant.categories.map (category => {
			if(!categories.includes(category.title)) {
				categories.push(category.title)
			}
		})
	)); 

	let selectedCategories: string[] = []; 

	function getSelectedCategories(category: string) {
		selectedCategories.push(category); 
	};

	return (
		<Grid>
			<Grid.Column width={10}>
				{categories.map(category => (
					<button className="ui button" onClick={() => getSelectedCategories(category)}>{category}</button>
				))}
				<RestaurantList restaurants={restaurants} selectedCategories={selectedCategories}/>
			</Grid.Column>
		</Grid>
	)
}

// function getSelectedCategories = (category: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		
// }
