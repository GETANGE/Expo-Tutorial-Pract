import React from 'react';
import { StyleSheet, View } from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// initialize the Tab component
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <View style={styles.container}>
            <CurrentWeather/>
        </View>
    </NavigationContainer>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App;