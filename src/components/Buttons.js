import React, { Component } from 'react';
import { Alert, StyleSheet, View, Button } from 'react-native';

class Buttons extends Component{
	onPressButton(){
		Alert.alert('You pressed a button');
	}
	render(){
		return(
			<View style={style.buttonsContainer}>
				<Button title="Mark Attendance" onPress={this.onPressButton} />
				<Button title="Check Attendance" onPress={this.onPressButton} />
			</View>
		);
	}
}

export default Buttons;

const style = StyleSheet.create({
	buttonsContainer: {
		flex: 1,
		top: 100
	}
})