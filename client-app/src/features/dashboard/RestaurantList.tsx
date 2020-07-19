import React from 'react'
import { Item, Image, Button, Label, Segment, Icon } from 'semantic-ui-react'
import { IRestaurant } from '../../app/models/restaurant'

interface IProps {
	restaurants: IRestaurant[]
}

export const RestaurantList: React.FC<IProps> = ({ restaurants }) => {
	return (
		<Segment clearing>
			<Item.Group divided>
				{restaurants.map(restaurant => (
					<Item key={restaurant.title}>
						<Item.Image size='medium' src={restaurant.image.replace("w80-h92", "w400-h400")} />

						<Item.Content>
							<Item.Header as='a'>{restaurant.title}</Item.Header>
							<Item.Meta>{restaurant.address}</Item.Meta>
							<Item.Meta>{restaurant.postcode}</Item.Meta>
							<Item.Description>
								<div>
									<Icon color='yellow' name='star'/> {restaurant.rating}
								</div>
								<Icon color='black' name='write'/>{restaurant.reviews}
								<div>{restaurant.price}</div>
								<div>{restaurant.information}</div>
								<div>{restaurant.summary}</div>
							</Item.Description>
							<Item.Extra>
								<Label basic content={restaurant.category} />
							</Item.Extra>
						</Item.Content>
					</Item>
				))}
			</Item.Group>
		</Segment>
	)
}

/**
 * 
 * 			<Item.Group divided>
				{restaurants.map(restaurant => (
					<Item key={restaurant.title}>
						<Item.Content>
							<Item.Header as='a'>{restaurant.title}</Item.Header>
							<Item.Meta>{restaurant.address}</Item.Meta>
							<Item.Image src={restaurant.image.replace("w80-h92", "w400-h400")} />
							<Item.Description>
								<div>{restaurant.rating}</div>
								<div>{restaurant.reviews}</div>
								<div>{restaurant.price}</div>
							</Item.Description>
							<Item.Extra>
								<Button floated='right' content='View' color='blue' />
								<Label basic content={restaurant.category} />
							</Item.Extra>
						</Item.Content>
					</Item>
				))}
			</Item.Group>
 */
