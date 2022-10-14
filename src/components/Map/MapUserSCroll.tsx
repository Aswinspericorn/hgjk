import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Box} from '../../theme/theme';
import MapUSerTile from '../MapUSerTile';
const MapUserScroll = ({users, scrollToIndex, setScrollToIndex, setRegion}) => {
  const ref = useRef();
  useEffect(() => {
    ref?.current?.scrollToIndex({
      index: scrollToIndex,
      viewPosition: 0.5,
      viewOffset: 20,
      animated: true,
    });
  }, [scrollToIndex]);
  const renderItem = ({item, index}) => (
    <Box
      key={index}
      paddingRight="m"
      paddingLeft={index === 0 ? 'l' : 'xs'}
      onTouchStart={() => {
        setRegion({
          latitude: item?._data.location.location.lat,
          longitude: item?._data.location.location.lng,
          latitudeDelta: 50,
          longitudeDelta: 50,
        });
        setScrollToIndex(index);
      }}>
      <MapUSerTile item={item} />
    </Box>
  );

  return (
    <Box flex={1}>
      {users.length > 1 && (
        <FlatList
          ref={ref}
          style={styles.screen}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          initialScrollIndex={0}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              ref.current?.scrollToIndex({
                index: info.index,
                animated: true,
              });
            });
          }}
        />
      )}
    </Box>
  );
};
export default MapUserScroll;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: 200,
  },
});
