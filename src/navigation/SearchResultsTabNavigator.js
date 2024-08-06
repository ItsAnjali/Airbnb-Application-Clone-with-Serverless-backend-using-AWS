import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ViewPager from '@react-native-community/viewpager';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        }
      }}>
      <Tab.Screen name="List" component={SearchResults} />
      <Tab.Screen name="Map" component={SearchResultsMap} /> 
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
