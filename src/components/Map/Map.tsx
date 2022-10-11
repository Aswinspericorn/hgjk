/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Box, Text} from '../../theme/theme';
import MapView, {AnimatedRegion, LatLng, Marker} from 'react-native-maps';
import {Alert, Dimensions, Image, StyleSheet} from 'react-native';
import MapViewDirections, {
  MapViewDirectionsOrigin,
} from 'react-native-maps-directions';
import {API_KEY} from '../../constants/confiq';
import {useSelector} from 'react-redux';
import DetailCard from './DetailCard';
import timeConvert from '../../helper/TimeMinuteConvert';
import {getCurrentLocation, requestPermission} from '../../helper/Map.helper';
import Navigate from '../../assets/icons/Svg/compass.svg';
import AnimatedMapRegion from 'react-native-maps/lib/AnimatedRegion';
const Map = ({route}: any) => {
  const mapRef = useRef();
  const markerRef = useRef();
  const {width, height} = Dimensions.get('window');
  const [distance, setDistance] = useState<number>(0);
  const [heading, setHeading] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [duration, setDuration] = useState<number[]>([0, 0]);
  const userData = useSelector((state: any) => state?.UserData.userData);
  const [curLoc, setCurLoc] = useState<MapViewDirectionsOrigin | undefined>();
  const [coordinate, setCoordinate] = useState<LatLng | AnimatedMapRegion>();

  const location = route?.params.location;
  const image = route?.params.image;
  const fname = route?.params.fname;

  const origin = {
    latitude: userData.location.location.lat,
    longitude: userData.location.location.lng,
  };
  const destination = {
    latitude: location.location.lat,
    longitude: location.location.lng,
  };
console.log(destination)
  const animate = (latitude: number, longitude: number) => {
    markerRef.current?.animateMarkerToCoordinate(
      latitude && longitude
        ? {latitude, longitude}
        : userData.location.location,
      5000,
    );
  };

  const getCurrentLoc = async () => {
    const permission = await requestPermission();
    if (permission) {
      const {latitude, longitude} = await getCurrentLocation();
      setCurLoc({latitude, longitude});
      const temp = new AnimatedRegion({
        latitude: latitude,
        longitude: longitude,
      });
      setCoordinate(temp);
      animate(latitude, longitude);
    }
  };
  const getHeader = async () => {
    const permission = await requestPermission();
    if (permission) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const {heading} = await getCurrentLocation();
      mapRef.current?.animateCamera({
        heading: location.location.lng > 0 ? 180 : 0,
        pitch: 0,
        animate: true,
      });
      setHeading(heading);
    }
  };

  useEffect(() => {
    getCurrentLoc();
  }, []);

  useEffect(() => {
    mapRef.current.fitToCoordinates([curLoc], {
      edgePadding: {top: 20, right: 20, bottom: 20, left: 20},
      animated: true,
    });
  }, [start]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        getCurrentLoc();
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        getHeader();
      }, 100);
      return () => clearInterval(interval);
    }
  }, [heading]);

  return (
    <Box flex={1}>
      <MapView
        style={{transform: [{rotate: `${heading}deg`}]}}
        mapType="standard"
        ref={mapRef}
        zoomControlEnabled={true}
        rotateEnabled={true}
        maxZoomLevel={18}
        minZoomLevel={0}
        style={styles.container}
        initialRegion={{
          latitude: userData.location.location.lat,
          longitude: userData.location.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={origin}>
          <Text variant="buttonTitle" textAlign="center">
            {userData.name}
          </Text>
          <Image source={{uri: userData?.photo}} style={styles.image} />
        </Marker>

        <Marker coordinate={destination}>
          <Text variant="buttonTitle" textAlign="center">
            {fname}
          </Text>
          <Image source={{uri: image}} style={styles.image} />
        </Marker>

        {coordinate && (
          <Marker.Animated ref={markerRef} coordinate={coordinate}>
            <Box height={70} width={70} justifyContent="center" padding="s">
              <Text variant="buttonTitle" textAlign="center">
                Me
              </Text>
              <Navigate
                height={30}
                width={40}
                style={{transform: [{rotate: `${heading}deg`}]}}
              />
            </Box>
          </Marker.Animated>
        )}
        <MapViewDirections
          precision="high"
          resetOnChange={false}
          mode="DRIVING"
          origin={curLoc && start ? curLoc : origin}
          destination={destination}
          apikey={API_KEY}
          strokeWidth={4}
          strokeColor="#1967d2"
          onError={() => {
            Alert.alert('No route found');
            return;
          }}
          onReady={result => {
            setDistance(result?.distance);
            setDuration(timeConvert(result?.duration));
            !start &&
              mapRef.current.fitToCoordinates(
                [
                  {
                    latitude: userData.location.location.lat,
                    longitude: userData.location.location.lng,
                  },
                  {
                    latitude: location.location.lat,
                    longitude: location.location.lng,
                  },
                ],
                {
                  edgePadding: {
                    right: width / 5,
                    bottom: height / 5,
                    left: width / 5,
                    top: height / 5,
                  },
                },
              );
          }}
        />
      </MapView>
      {distance > 0 && (
        <DetailCard
          distance={distance}
          duration={duration}
          name={fname}
          image={image}
          place={location.shortName}
          setStart={setStart}
          start={start}
        />
      )}
    </Box>
  );
};
export default Map;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  image: {height: 35, width: 35, borderRadius: 50},
});
