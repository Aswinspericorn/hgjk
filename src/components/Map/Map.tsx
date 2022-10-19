/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Box, Text} from '../../theme/theme';
import MapView, {Camera, Marker} from 'react-native-maps';
import {Alert, Dimensions, Image, StyleSheet} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {API_KEY} from '../../constants/confiq';
import {useSelector} from 'react-redux';
import DetailCard from './DetailCard';
import timeConvert from '../../helper/TimeMinuteConvert';
import {
  getCurrentLoc,
  getHeader,
  requestPermission,
} from '../../helper/Map.helper';
import Navigate from '../../assets/icons/Svg/compass.svg';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MarkersOfAllUsers from './MarkersOfUsers';
import MapUserScroll from './MapUserSCroll';

const Map = ({route}: any) => {
  const mapRef = useRef<undefined>();
  const markerRef = useRef();
  const {width, height} = Dimensions.get('window');
  const [distance, setDistance] = useState<number>(0);
  const [heading, setHeading] = useState<number>(0);
  const [cameraHeading, setCameraHeading] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<object>>([{}]);
  const [permission, setPermission] = useState<object>({});
  const [duration, setDuration] = useState<number[]>([0, 0]);
  const userData = useSelector((state: any) => state?.UserData.userData);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [region, setRegion] = useState<object>({
    latitude: userData.location.location.lat,
    longitude: userData.location.location.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [curLoc, setCurLoc] = useState<{}>({
    latitude: userData.location.location.lat,
    longitude: userData.location.location.lng,
  });
  const location = route?.params?.location;
  const image = route?.params?.photo;
  const fname = route?.params?.fname;
  const email = route?.params?.email;
  const phno = route?.params?.phno;
  const id = route?.params?.id;

  const origin = {
    latitude: userData.location.location.lat,
    longitude: userData.location.location.lng,
  };

  const destination = {
    latitude: location?.location?.lat,
    longitude: location?.location?.lng,
  };
  const animate = (latitude: number, longitude: number) => {
    markerRef.current?.animateMarkerToCoordinate(
      latitude && longitude
        ? {latitude, longitude}
        : userData.location.location,
      3000,
    );
  };

  //TO GET CAMERA HEADING
  function updateCameraHeading() {
    const map = mapRef.current;
    map.getCamera().then((info: Camera) => {
      setCameraHeading(info.heading);
    });
  }

  //initial request an loading location
  useEffect(() => {
    const request = async () => {
      const perm = await requestPermission();
      if (perm) {
        setPermission(perm);
        getCurrentLoc(perm, setCurLoc, animate);
      }
    };
    request();
  }, []);

  //to focus on current location
  useEffect(() => {
    if (curLoc) {
      mapRef?.current?.fitToCoordinates(
        [{latitude: curLoc?.latitude, longitude: curLoc?.longitude}],
        {
          edgePadding: {top: 20, right: 20, bottom: 20, left: 20},
          animated: true,
        },
      );
    }
  }, [start]);

  //to get heading of user
  useEffect(() => {
    if (start) {
      const interval = setInterval(async () => {
        getHeader(permission, setHeading);
      }, 500);
      return () => clearInterval(interval);
    }
  });

  //get curerent location at every second
  useEffect(() => {
    if (start) {
      const interval = setInterval(async () => {
        getCurrentLoc(permission, setCurLoc, animate);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    if (distance === 0) {
      setTimeout(function () {
        mapRef?.current?.fitToElements(true);
      }, 2000);
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.screen}>
      <Box flex={1}>
        <MapView
          mapType="standard"
          region={region}
          ref={mapRef}
          zoomControlEnabled={true}
          rotateEnabled={true}
          maxZoomLevel={18}
          minZoomLevel={0}
          style={styles.maps}
          onTouchEnd={() => {
            updateCameraHeading();
          }}
          onTouchCancel={() => {
            updateCameraHeading();
          }}
          onTouchStart={() => {
            updateCameraHeading();
          }}
          onTouchMove={() => {
            updateCameraHeading();
          }}
          initialRegion={{
            latitude: userData.location.location.lat,
            longitude: userData.location.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={origin}>
            <Text variant="buttonTitle" textAlign="center">
              {users.length > 1 ? 'Me' : userData.name}
            </Text>
            <Image source={{uri: userData?.photo}} style={styles.image} />
          </Marker>

          {distance > 0 ? (
            <Marker.Animated
              anchor={{x: 0.5, y: 0.5}}
              ref={markerRef}
              coordinate={
                curLoc
                  ? {latitude: curLoc?.latitude, longitude: curLoc?.longitude}
                  : origin
              }>
              <Box height={70} width={70} justifyContent="center" padding="s">
                <Text variant="buttonTitle" textAlign="center">
                  Me
                </Text>
                <Navigate
                  height={30}
                  width={40}
                  style={{
                    transform: [{rotate: `${heading - cameraHeading - 90}deg`}],
                  }}
                />
              </Box>
            </Marker.Animated>
          ) : (
            !route.params && (
              <MarkersOfAllUsers
                setRegion={setRegion}
                setMarkerLoaded={setUsers}
                scrollToIndex={scrollToIndex}
                setScrollToIndex={setScrollToIndex}
              />
            )
          )}

          {destination.latitude && (
            <>
              <Marker coordinate={destination}>
                <Text variant="buttonTitle" textAlign="center">
                  {fname}
                </Text>
                <Image source={{uri: image}} style={styles.image} />
              </Marker>
              <MapViewDirections
                precision="high"
                resetOnChange={false}
                mode="DRIVING"
                origin={
                  curLoc && start
                    ? {latitude: curLoc.latitude, longitude: curLoc.longitude}
                    : origin
                }
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
                  !start && mapRef?.current.fitToElements(true);
                }}
              />
            </>
          )}
        </MapView>
        {distance > 0 ? (
          <DetailCard
            distance={distance}
            duration={duration}
            id={id}
            name={fname}
            image={image}
            email={email}
            phno={phno}
            place={location.shortName}
            setStart={setStart}
            start={start}
          />
        ) : (
          <Box position="absolute" bottom={10} flex={1}>
            <MapUserScroll
              setRegion={setRegion}
              scrollToIndex={scrollToIndex}
              users={users}
              setScrollToIndex={setScrollToIndex}
            />
          </Box>
        )}
      </Box>
    </GestureHandlerRootView>
  );
};
export default Map;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  image: {height: 35, width: 35, borderRadius: 50},
  maps: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
});
