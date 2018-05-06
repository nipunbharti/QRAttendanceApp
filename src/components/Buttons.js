import React, { Component } from 'react';
import { Alert, StyleSheet, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RootStack } from './Stack';

class Buttons extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: [],
		}
		this.onPressButton = this.onPressButton.bind(this);
	}
	onPressButton(){
		
	}
	render(){
		const { navigate } = this.props.navigationStuff;
		return(
			<View style={style.buttonsContainer}>
				<View style={style.button1}>
					<Button title="Mark Attendance"
					color='#0353A4'
					onPress={() => navigate('Scanner')} />
				</View>
				<View style={style.button1}>
					<Button title="Check Attendance"
					color='#0353A4'
					onPress={() => navigate('Details1')} />
				</View>
				<View style={style.button1}>
					<Button title="Check for Low Attendance in Discrete Maths" 
					color='#0353A4'
					onPress={() => navigate('LowAttendance')} />
				</View>
			</View>
		);
	}
}

export default Buttons;

const style = StyleSheet.create({
	buttonsContainer: {
		flex: 1,
	},
	button1: {
		marginTop: 25,
		flex: 0.15,
		alignItems: 'center',
	}
})