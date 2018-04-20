import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Footer extends Component{
	render(){
		return(
			<View style={styles.footerContainer}>
				<Text style={styles.footerTextContainer}>Made with 💝 for college</Text>
			</View>
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