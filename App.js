import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';


import Facebook from './screens/facebook'
import instagram from './screens/instagram';


export default class App extends React.Component {
  render(){
    return (
        <AppContainer/>
      );
  }
  
}

const tabNavigator= createBottomTabNavigator({
  Facebook: {screen:Facebook},
  Instagram :{screen:instagram}
})

const AppContainer = createAppContainer(tabNavigator);
