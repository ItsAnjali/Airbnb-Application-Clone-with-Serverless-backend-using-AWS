import React, {useEffect, useState, useRef} from 'react';
import {View, FlatList, useWindowDimensions, ViewBase} from 'react-native';
import MapView from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = props => {
  const { posts } = props;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  console.log("Search posts map = "+posts?.length)


  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  })

  const { width } = useWindowDimensions();


  useEffect(() => {
    if (!selectedPlaceId || !flatlist.current) {
      return;
    }
    const index = posts.findIndex((post) => post.id === selectedPlaceId);
    flatlist.current.scrollToIndex({ index });
    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (

    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{ width: '100%', height: '100%' }}
        region={{
          latitude: 31.1048, // Shimla latitude
          longitude: 77.1734, // Shimla longitude
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {posts.map((post) => (
          <CustomMarker 
            key={post.id}
            isSelected={post.id === selectedPlaceId}
            coordinate={{
              latitude: post.latitude,
              longitude: post.longitude,
            }}
            price={post.newPrice}
            onPress={() => setSelectedPlaceId(post.id)}
          />
        ))}

      </MapView>

      <View style={{ position: "absolute", bottom: 20 }}>
        <FlatList
          ref={flatlist}
          data={posts}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          keyExtractor={(item) => item.id.toString()}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
