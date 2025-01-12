import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';


const Post1 = props => {
  const postdata = props.post;
  //console.log("Post data = ",postdata);
  
  const {width} = useWindowDimensions();

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: postdata.id});
  }

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: postdata.image,
          }}
        />
        {/* Bed and Bedroom */}
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={styles.bedrooms}>
            {postdata.bed} bed {postdata.bedroom} bedroom
          </Text>
          {/* Type and Description */}
          <Text style={styles.description}>
            {postdata.type}. {postdata.title}
          </Text>
          {/* Old Price and New Price */}
          <Text style={styles.prices}>
            <Text style={styles.price}>Rs{postdata.newPrice} </Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post1;
