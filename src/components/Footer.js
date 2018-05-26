import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableHighlight } from 'react-native';

class Footer extends Component{
	onPressFooter(){
		Alert.alert("Made by Akhil, Nipun and Yashovardhan.");
	}
	render(){
		const { navigate } = this.props.navigationStuff;
		return(
			<TouchableHighlight style={styles.footerContainer} onPress={() => navigate('MastHead')}>
				<Text style={styles.footerTextContainer}>Made with 💝 for IIITDM</Text>
			</TouchableHighlight>
		);
	}
}

export default Footer;

const styles = StyleSheet.create({
	footerContainer:{
		alignItems: 'center',
		flex: 0.1,
		justifyContent: 'center',
		backgroundColor: '#0353A4'
	},
	footerTextContainer: {
		fontSize: 15,
		fontFamily: 'Trebuchet MS',
		fontWeight: '300',
		color: 'white'
	}
})