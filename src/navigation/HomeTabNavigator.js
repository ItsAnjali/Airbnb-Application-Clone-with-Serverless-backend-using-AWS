import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import HomeScreen from '../screens/Home';
import ProfileScreen from "../screens/Profile";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Post from '../components/Post';
import ExploreNavigator from './ExploreNavigator'
import PostScreen from '../screens/PostScreen';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'saved'}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Airbnb'}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
