import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/Post';

import places from '../../../assets/data/feed';


const postdata = places[0];


const PostScreen = props => {
  return(
    <View>
      <Text>rtyujhgftyujh</Text>
      <Post post={postdata} />
    </View>
  );
};

export default PostScreen; 