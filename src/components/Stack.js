import React from 'react';
import { StackNavigator } from 'react-navigation';
import Homescreen from './Homescreen';
import DetailsScreen from './Details';

export const RootStack = StackNavigator({
  Home: {
    screen: Homescreen,
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Details'
    }
  },
  initialRouteName: 'Home',
});
