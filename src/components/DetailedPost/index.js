import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Post = props => {
  const postdata = props.post;
  const navigation = useNavigation();
  console.log("PostData = "+postdata)
  return (
    <ScrollView>
      <View style={styles.container}>
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
        <Text style={styles.totalPrice}>Rs{postdata.totalPrice} total</Text>

        <Text style={styles.longDescription}>{postdata.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Post;
