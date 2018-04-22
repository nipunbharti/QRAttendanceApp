import React from 'react';
import { StackNavigator } from 'react-navigation';
import Homescreen from './Homescreen';
import ScanScreen from './Camera';
import Details1 from './Display1';

export const RootStack = StackNavigator({
  Home: {
    screen: Homescreen,
  },
  Scanner: {
    screen: ScanScreen,
    navigationOptions: {
      title: 'Scanner'
    }
  },
  Details1: {
    screen: Details1,
    navigationOptions: {
      title: 'Details1'
    }
  },
  initialRouteName: 'Home',
});
