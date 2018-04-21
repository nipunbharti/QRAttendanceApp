import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RootStack } from './src/components/Stack';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
