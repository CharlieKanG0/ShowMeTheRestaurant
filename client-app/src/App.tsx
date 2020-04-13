import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'

class App extends Component {

	state = {
		values: []
	}

	componentDidMount() {
		axios.get('https://localhost:5001/GoogleReview')
			.then((response) => {
				this.setState({
					values: response.data
				})
			})
	}

	render() {
		return (
			<div>
				<Header as='h2'>
					<Icon name='food' />
					<Header.Content>Restaurants</Header.Content>
				</Header>
				<List>
					{this.state.values.map((value: any) => (
						<List.Item key={value.title}>
							{"Restaurant: " + value.title + " | Rating: " + value.rating + " | Reviews: " + value.reviews}
						</List.Item>
					))}
				</List>
			</div>
		);
	}
}

export default App;
