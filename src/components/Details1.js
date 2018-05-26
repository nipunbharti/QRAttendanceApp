import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';

class Details extends Component{
	render(){
		return(
			<View style={styles.detailsContainer}>
				<View>
					<Image source = {require('./logo.png')} />
				</View>
				<Text style={styles.detailsTextContainer}>Made as part of DBMS Project by Nipun Bharti, S Sai Yashovardhan and Akhil Jasrotia</Text>
			</View>
		);
	}
}

export default Details;

const styles = StyleSheet.create({
	detailsContainer:{
		alignItems: 'center',
		flex: 1,
	},
	detailsTextContainer: {
		fontSize: 20,
		fontFamily: 'Trebuchet MS',
		fontWeight: '300',
	}
})