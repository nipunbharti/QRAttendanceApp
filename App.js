import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './src/components/Buttons';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Buttons />
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
