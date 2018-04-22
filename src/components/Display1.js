import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Details1 extends Component{
	render(){
		return(
			<View style={styles.headerContainer}>
				<Text style={styles.headerTextContainer}>QR Attendance App</Text>
			</View>
		);
	}
}

export default Details1;

const styles = StyleSheet.create({
	headerContainer:{
		alignItems: 'center',
		flex: 0.8,
		justifyContent: 'center',
	},
})