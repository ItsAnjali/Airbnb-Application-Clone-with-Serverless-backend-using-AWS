import React from 'react';
import {View, FlatList} from 'react-native';

import Post from '../../components/Post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = props => {
  const posts = props.posts;
  return (
    <View>
      <FlatList 
        data={posts} 
        renderItem={({item}) => <Post postdata={item} />} // Pass postdata as expected by Post component
        // keyExtractor={(item) => item.id.toString()} // Ensure unique key for each item
      />
    </View>
  );
};

export default SearchResultsScreen;
