import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native';

class LowAttendance extends Component{
	constructor(){
		super();
		this.state = {
			data: [],
		}
	}
	componentWillMount(){
		fetch('http://172.16.89.233:3000/n2/', {
		  method: 'POST',
		  // body: JSON.stringify({
		  //   "ced15i013":"kn"
		  // }),
		}).then((response) => response.json())
	    .then((responseJson) => {
	    	this.setState({
	    		data: responseJson
	    	})
	    	console.log(this.state.data)
	    })
	    .catch((error) => {
	      console.error(error);
	    })
	}
	render(){
		var x = this.state.data;
		return(
			<ScrollView style={styles.headerContainer}>
				<View style={styles.headerTextContainer}>
					<View style={styles.attendanceSheet}>
						<View style={styles.nameHeader}>
							<Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>Name</Text>
						</View>
						<View style={styles.rollNoHeader}>
							<Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>Roll Number</Text>
						</View>
					</View>
					{
						x.map(function(index){
							return(
								<View style={styles.attendanceSheet}>
									<View style={styles.name}>
										<Text style={{fontSize: 18}}>{index.name}</Text>
									</View>
									<View style={styles.rollNo}>
										<Text style={{fontSize: 18}}>{index.roll}</Text>
									</View>
								</View>
							);
						})
					}
				</View>
			</ScrollView>
		);
	}
}

export default LowAttendance;

const styles = StyleSheet.create({
	headerContainer:{
		flex: 1,
	},
	headerTextContainer: {
		flex: 1,
	},
	attendanceSheet: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	rollNo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 7
	},
	rollNoHeader: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		backgroundColor: '#0353A4'
	},
	nameHeader: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		backgroundColor: '#0353A4'
	},
	name: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 7
	},
})