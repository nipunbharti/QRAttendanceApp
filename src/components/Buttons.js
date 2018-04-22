import React, { Component } from 'react';
import { Alert, StyleSheet, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RootStack } from './Stack';
import QRCodeScanner from 'react-native-qrcode-scanner';

class Buttons extends Component{
	constructor(props){
		super(props);
		this.onPressButton = this.onPressButton.bind(this);
	}
	onPressButton(){
		fetch('http://192.168.2.74:3000/n/', {
		  method: 'POST',
		  // body: JSON.stringify({
		  //   "ced15i013":"kn"
		  // }),
		}).then((responseJson) => responseJson.json()).then((j) => {
	    	// Alert.alert('Attendance given by ',j.roll);
	    	console.log(j);
			//return responseJson;
	    })
	    .catch((error) => {
	      console.error(error);
	    })
	}
	render(){
		const { navigate } = this.props.navigationStuff;
		return(
			<View style={style.buttonsContainer}>
				<Button title="Mark Attendance" onPress={() => navigate('Scanner')} />
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