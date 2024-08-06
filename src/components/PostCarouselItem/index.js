import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const Post = props => {

  const postdata = props.postdata;

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image
          style={styles.image}
          source={{
            uri: postdata.image,
          }}
        />
        {/* Bed and Bedroom */}
        <View style={{ flex: 1, marginHorizontal: 10 }}>
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
    </View>
  );
};

export default Post;
