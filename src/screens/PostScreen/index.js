import React from 'react';
import {View, Text} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/native';

import places from '../../../assets/data/feed';


const PostScreen = props => {
  const route = useRoute();
 console.log("Triggered = ",route.params.postId);
  const postdata = places.find(place => place.id === route.params.postId);
console.log("Post data = ",postdata);
  return(
    <View style={{backgroundColor: 'white'}}>
      <Text>rtyujhgftyujh</Text>
      <DetailedPost post={postdata} />
    </View>
  );
};

export default PostScreen; 