import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IRestaurant } from '../../app/models/restaurant'
import { RestaurantList } from './RestaurantList'
import { SearchResponse } from '../../app/models/SearchResponse'

interface IProps {
	restaurants: SearchResponse
}

export const RestaurantDashboard: React.FC<IProps> = ({restaurants}) => {
	return (
		<Grid>
			<Grid.Column width={10}>
				<RestaurantList restaurants={restaurants}/>
			</Grid.Column>
		</Grid>
	)
}
