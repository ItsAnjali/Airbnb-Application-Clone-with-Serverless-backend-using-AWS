import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

/*
props = {
      postdata:{
                    title:fgfygji
                    id:345678
                    bed:9
                    
                }
      parameter1:objects
      vaas:objects
}

*/

  // const OK = props.OK;
  

  // var temp = props.postdata;

  // const goToPostPage = () => {
  //   navigation.navigate('Post', {postId: post.id});
  // }

const days = 7;

const Post = (props) => {
  console.log("props = "+props+"  props.post = "+props.post)
  const postdata = props.post;
  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { postId: postdata.id });
  }

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: postdata.image,
        }}
      />
      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        {postdata.bed} bed {postdata.bedroom} bedroom
      </Text>
      {/* Type and Description */}
      <Text style={styles.description}>
        {postdata.type}. {postdata.title}
      </Text>

      {/* Old Price and New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>Rs{postdata.oldPrice}</Text>
        <Text style={styles.price}> Rs{postdata.newPrice} </Text> / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>Rs{postdata.newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;