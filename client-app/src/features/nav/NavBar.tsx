import React from 'react'
import { Menu, Container, Icon } from 'semantic-ui-react'

export const NavBar = () => {
	return (
		<Menu fixed='top' inverted>
			<Container>
				<Menu.Item header>
					<img src="/assets/logo.png" alt="logo" style={{}} />
					<Icon name='food' />
					SMTR
				</Menu.Item>
				<Menu.Item
					name='?'
				/>
				<Menu.Item
					name='?'
				/>
			</Container>
		</Menu>
	)
}
