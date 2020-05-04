import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { IRestaurant } from '../../app/models/restaurant'
import { RestaurantList } from './RestaurantList'

interface IProps {
	restaurants: IRestaurant[]
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
