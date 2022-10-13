import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Box, Text, TouchableBox} from '../../theme/theme';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
import {getPreciseDistance} from 'geolib';
import {getAllUsersWithoutFilter} from '../../helper/Firebase.helper';
import {useSelector} from 'react-redux';
import NoFriends from '../NoFriends';
import ListOfFriends from '../../screens/HomeScreens/SearchUser/components/ListOfFriends';

interface Props {
  distance: number;
  id: string;
  duration: number[];
  image: string;
  email: string;
  phno: number;
  place: string;
  name: string;
  start: boolean;
  setStart: (a: boolean) => void;
}

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 20;
const MIN_TRANSLATE_Y = -SCREEN_HEIGHT / 6;
const DetailCard = ({
  distance,
  duration,
  image,
  place,
  id,
  name,
  start,
  email,
  phno,
  setStart,
}: Props) => {
  const [users, setUsers] = useState<Array<object>>([{}]);
  const userData = useSelector((state: any) => state?.UserData.userData);
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, {damping: 50});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      translateY.value = Math.min(translateY.value, MIN_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 2) {
        scrollTo(MIN_TRANSLATE_Y);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [30, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });

  const listNearestFriends = async () => {
    const usersList = await getAllUsersWithoutFilter();
    const friends = usersList?.filter(element => {
      const distanceInMeter = getPreciseDistance(
        {
          latitude: element.data()?.location.location.lat,
          longitude: element.data()?.location.location.lng,
        },
        {
          latitude: userData?.location.location.lat,
          longitude: userData?.location.location.lng,
        },
        userData?.location.location,
      );
      element.data().distance = (distanceInMeter / 1000).toFixed(0);
      return (
        distanceInMeter / 1000 < 300 &&
        distanceInMeter !== 0 &&
        element.id !== id
      );
    });
    setUsers(friends);
  };

  useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 6);
    listNearestFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.screen, rBottomSheetStyle]}>
        <Box
          height={4}
          width={55}
          backgroundColor="buttonSetupGrey"
          alignSelf="center"
          marginBottom="s"
        />
        <Box flexDirection="row" width={'100%'} justifyContent="space-between">
          <Box>
            <Box paddingBottom="s" flexDirection="row">
              <Text variant="TextButtonTitle" color="mapGreen">
                {duration[0]}hr {duration[1]}min
              </Text>
              <Text variant="TextButtonTitle">
                ({distance ? distance : 0} km)
              </Text>
            </Box>
            <Box paddingBottom="xs">
              <Text variant="buttonTitle">{place}</Text>
            </Box>
            <Box flexDirection="row" alignItems="center">
              <Box width={'15%'}>
                <Image source={{uri: image}} style={styles.Image} />
              </Box>
              <Box paddingLeft="m">
                <Text variant="buttonTitle">{name}</Text>
              </Box>
            </Box>
            <Box paddingLeft="m" paddingTop="m">
              <Text variant="PersonalizationRegular" textAlign="left">
                {email}
              </Text>
            </Box>
            <Box paddingLeft="m" paddingTop="s">
              <Text variant="PersonalizationRegular" textAlign="left">
                {phno}
              </Text>
            </Box>
          </Box>
          <Box alignItems="center">
            {!start ? (
              <TouchableBox
                onPress={() => {
                  scrollTo(MIN_TRANSLATE_Y);
                  setStart(true);
                }}
                backgroundColor="mapButtonBlue"
                borderRadius="l"
                paddingVertical="s"
                paddingHorizontal="m">
                <Text variant="TextButtonTitle" color="secondaryBackground">
                  Start
                </Text>
              </TouchableBox>
            ) : (
              <TouchableBox
                onPress={() => {
                  scrollTo(MIN_TRANSLATE_Y);
                  setStart(false);
                }}
                backgroundColor="mapButtonBlue"
                borderRadius="l"
                paddingVertical="s"
                paddingHorizontal="m">
                <Text variant="TextButtonTitle" color="secondaryBackground">
                  Stop
                </Text>
              </TouchableBox>
            )}
          </Box>
        </Box>
        <Box paddingTop="l">
          <Text variant="body">Friends around you</Text>
        </Box>
        <ScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}>
          {users.length > 0 ? <ListOfFriends list={users} /> : <NoFriends />}
        </ScrollView>
      </Animated.View>
    </GestureDetector>
  );
};
export default DetailCard;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    bottom: 0,
    backgroundColor: 'white',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  Image: {
    width: 34,
    height: 34,
    borderRadius: 100,
  },
});
