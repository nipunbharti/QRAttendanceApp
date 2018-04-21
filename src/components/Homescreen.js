import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './Buttons';
import Header from './Header';
import Footer from './Footer';
import BadInstagramCloneApp from './Camera';

export default class Homescreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  }
  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Header />
        <Buttons navigationStuff = {this.props.navigation} />
        <Footer />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
