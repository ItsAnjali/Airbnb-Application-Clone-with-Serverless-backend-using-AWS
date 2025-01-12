import React, { useState, useEffect } from "react";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ViewPager from '@react-native-community/viewpager';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import {useRoute} from "@react-navigation/native";    
import { API, graphqlOperation } from "aws-amplify";
// import { listPosts } from "../../graphql/queries";
import { listPosts } from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  const [posts, setPosts] = useState([]);
// console.log("props" + props );
  // console.log("listPosts" + listPosts);
const route = useRoute();
const {guests, viewport} = route.params;
// console.log("viewport" + viewport);
useEffect(() => {
  const fetchPosts = async () => {
    console.log("Guest:", guests);
    console.log("Viewport southwest lat:", viewport?.southwest?.lat);
    console.log("Viewport southwest lng:", viewport?.southwest?.lng);
    console.log("Viewport northeast lat:", viewport?.northeast?.lat);
    console.log("Viewport northeast lng:", viewport?.northeast?.lng);
    try {
      const postsResult = await API.graphql(
        graphqlOperation(listPosts, {
          filter: {
            and : {
              maxGuest: { ge: guests }, // Filter for maxGuest >= guests
              latitude: { between: [viewport.southwest.lat, viewport.northeast.lat] }, // Filter for latitude within bounds
              longitude: { between: [viewport.southwest.lng, viewport.northeast.lng] }, // Filter for longitude within bounds
            }
          }
        })  
      );
      
      setPosts(postsResult.data.listPosts.items);

    } catch (e) {
      console.log("Error fetching posts:", e);
    }
  };
  
  fetchPosts();
}, [guests]);
console.log("posts = "+posts?.length)

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        }
      }}>
      <Tab.Screen name="List">
        {() => <SearchResults posts={posts} />}
      </Tab.Screen>
      <Tab.Screen name="Map">
        {() => <SearchResultsMap posts={posts} />}
      </Tab.Screen> 
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
