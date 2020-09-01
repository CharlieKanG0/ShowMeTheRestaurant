import React from 'react'
import { Grid, List, Header } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { IRestaurant } from '../../app/models/restaurant'
import { RestaurantList } from './RestaurantList'
import { SearchResponse } from '../../app/models/SearchResponse'
import { Router, RouteComponentProps, useHistory } from 'react-router'

interface ICategories {
	region: string;
	cousines: string[];
}

export const SelectCategories: React.FC = () => {

	let history = useHistory(); 

	let restaurantCategories: ICategories[] = [
		{ region: 'Western', cousines: ['american', 'australian', 'barbeque'] },
		{ region: 'Eastern', cousines: ['asianfusion', 'chinese', 'japanese', 'malaysian', 'taiwanese', 'korean'] },
		{ region: 'South American', cousines: ['argentine', 'brazilian', 'caribbean', 'mexican'] },
		{ region: 'European', cousines: ['eastern_european', 'french', 'german', 'turkish'] }
	]

	let selectedCategories: string;

	function getSelectedCategories(category: ICategories) {
		selectedCategories = category.cousines.join(",");

		history.push({
			pathname: '/search', 
			state: { categories: selectedCategories } 
		})

	}

	return (
		<>
			<Header size='huge'> What would you like to eat? </Header>
			<Grid stackable columns={4}>
				{restaurantCategories.map(category => (
					<Grid.Column width={3}>
						<button className="ui button" onClick={() => getSelectedCategories(category)} key={category.region}>{category.region}</button>
						<List bulleted>
							{category.cousines.map (cousine => (
								<List.Item> {cousine} </List.Item>
							))}
						</List>
					</Grid.Column>
				))}
			</Grid>
		</>
	)
}

//export default SelectCategories; 