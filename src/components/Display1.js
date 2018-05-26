import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native';

class Details1 extends Component{
	constructor(){
		super();
		this.state = {
			data: [],
		}
	}
	componentWillMount(){
		fetch('http://172.16.89.233:3000/n1/', {
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
						<View style={styles.attendanceHeader}>
							<Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>Attendance</Text>
						</View>
					</View>
					{
						x.map(function(index){
							return(
								<View style={styles.attendanceSheet}>
									<View style={styles.name}>
										<Text style={{fontSize: 16}}>{index.name}</Text>
									</View>
									<View style={styles.rollNo}>
										<Text style={{fontSize: 16}}>{index.roll}</Text>
									</View>
									<View style={styles.attendance}>
										<Text style={{fontSize: 16}}>{index.attendance}</Text>
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

export default Details1;

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
		flex: 0.7,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 7
	},
	rollNoHeader: {
		flex: 0.7,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		backgroundColor: '#0353A4'
	},
	attendance: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 7
	},
	attendanceHeader: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		backgroundColor: '#0353A4'
	},
	nameHeader: {
		flex: 0.8,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		backgroundColor: '#0353A4'
	},
	name: {
		flex: 0.8,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 7
	},
})