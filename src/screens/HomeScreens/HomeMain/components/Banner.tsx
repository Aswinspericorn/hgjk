/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Box, Text} from '../../../../theme/theme';
import {currentDate} from '../../../../utils/dates';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Image, StyleSheet} from 'react-native';
import {weatherImagesObj} from '../../../../constants/weatherImagesObj';
import {useSelector} from 'react-redux';
const Banner = () => {
  const [temparature, setTemparature] = useState<{temp: string; icon: {}}>({
    temp: '24',
    icon: weatherImagesObj['01d'],
  });
  const IsFavouriteChanged = useSelector(
    (state: any) => state?.AppReducer.IsDataChanged.isChanged,
  );
  const userData = useSelector(
    (state: any) => state?.AppReducer.UserData.userData,
  );

  const API_KEY = 'e0110331adf97afda6ab257d0534f64c';
  const userId = auth().currentUser?.uid;

  useEffect(() => {
    function getLocation(documentSnapshot: any) {
      return documentSnapshot.get('location.location');
    }
    firestore()
      .collection('user')
      .doc(userId)
      .get()
      .then((documentSnapshot: any) => getLocation(documentSnapshot))
      .then((data: React.SetStateAction<{lat: string; lng: string}>) => {
        fetchWeather(data?.lat, data.lng);
      });
  }, [IsFavouriteChanged]);
  const fetchWeather = (lat: string, lng: string) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(data => {
        const temp = (data?.main?.temp - 273.15).toFixed(0);
        setTemparature({
          temp: temp,
          icon: weatherImagesObj[data?.weather[0]?.icon],
        });
      })
      .catch(() => {
        return;
      });
  };
  return (
    <Box
      paddingHorizontal="m"
      paddingTop="l"
      marginBottom="xs"
      backgroundColor="secondaryBackground"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row">
      <Box flex={4}>
        <Box justifyContent="center">
          <Text lineHeight={40} variant="header">
            {currentDate(userData?.language).time}
          </Text>
        </Box>
        <Box paddingTop="s">
          <Text variant="TextButtonTitle" lineHeight={20}>
            {currentDate(userData?.language).date}
          </Text>
        </Box>
      </Box>
      <Box flex={1} alignItems="flex-end" paddingTop="s">
        <Box>
          <Image source={temparature?.icon} style={styles.icon} />
        </Box>
        <Box justifyContent="center" paddingTop="xs">
          <Text variant="buttonTitle" fontSize={14} lineHeight={14}>
            {temparature.temp}°C
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default Banner;
const styles = StyleSheet.create({
  icon: {height: 24, width: 24},
});
