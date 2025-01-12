import React from "react";
import { View, FlatList } from "react-native";
import Post from "../../components/Post";


const SearchResultsScreen = (props) => {
  const { posts } = props;
  

  console.log("Search posts = "+posts?.length)
  return (
    <View>
      <FlatList 
        data={posts} 
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id.toString()} // Ensure unique key for each item
      />
    </View>
  );
};

export default SearchResultsScreen;
