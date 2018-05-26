import React from 'react';
import { StackNavigator } from 'react-navigation';
import Homescreen from './Homescreen';
import ScanScreen from './Camera';
import Details1 from './Display1';
import LowAttendance from './LowAttendance';
import Details from './Details1';

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
      title: 'Attendance sheet'
    }
  },
  LowAttendance: {
    screen: LowAttendance,
    navigationOptions: {
      title: 'Low Attendance'
    }
  },
  MastHead: {
    screen: Details,
    navigationOptions: {
      title: 'Mast Head'
    }
  },
  initialRouteName: 'Home',
});
