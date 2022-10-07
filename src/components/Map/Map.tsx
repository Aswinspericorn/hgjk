import React from 'react';
import {Box} from '../../theme/theme';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet} from 'react-native';
const Map = ({route}) => {
  const location = route?.params;
  return (
    <Box flex={1}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: location.location.lat,
          longitude: location.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: location.location.lat,
            longitude: location.location.lng,
          }}
        />
      </MapView>
    </Box>
  );
};
export default Map;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
