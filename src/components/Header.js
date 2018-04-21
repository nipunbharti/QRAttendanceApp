import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component{
	render(){
		return(
			<View style={styles.headerContainer}>
				<Text style={styles.headerTextContainer}>QR Attendance App</Text>
			</View>
		);
	}
}

export default Header;

const styles = StyleSheet.create({
	headerContainer:{
		alignItems: 'center',
		flex: 0.8,
		justifyContent: 'center',
		backgroundColor: '#0353A4'
	},
	headerTextContainer: {
		fontSize: 30,
		fontFamily: 'Trebuchet MS',
		fontWeight: '300',
		color: 'white'
	}
})