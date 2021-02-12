import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
	render() {
		const comments = [
			{
				nickname: 'John Snow',
				comment: 'Excelente foto!'
			},
			{
				nickname: 'Daenerys',
				comment: 'Que lugar é esse?'
			}
		]

		return (
			<View style={{ flex: 1}}>
				<Header />
				<Post image={require('./assets/imgs/fence.jpg')} 
					comments={comments}/>
			</View>
		)
	}
}
