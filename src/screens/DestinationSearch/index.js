import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import styles from './styles.js';
// import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
// import searchResults from '../../../assets/data/search';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow.js';

const DestinationSearchScreen = props => {
  // const [inputText, setInputText] = useState({initialState: ''});
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text>notjust a component</Text> */}

      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          //console.log(data, details);
          navigation.navigate("Guests", {
            viewport: details.geometry.viewport,
          });
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyBsxnnsy5_Rmu6LeG5KdgRbZsMjz3EQrPI',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
      {/* //INPUT */}
      {/* <TextInput
        style={styles.textInput}
        placeholder="where are you going?"
        value={inputText}
        onChangeText={setInputText}
      /> */}
      {/* LIST OF DESTINATION */}
    </View>
  );
};

export default DestinationSearchScreen;