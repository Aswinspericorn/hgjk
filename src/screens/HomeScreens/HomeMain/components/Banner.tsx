/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Box, Text} from '../../../../theme/theme';
import Sun from '../../../../assets/icons/Svg/sun.svg';
import {currentDate} from '../../../../utils/dates';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Banner = () => {
  const [location, setLocation] = useState<{lat: string; lng: string}>({
    lat: '',
    lng: '',
  });
  const [temaparature, setTemparature] = useState<string>('24');
  const API_KEY = 'efafc02782958cad4cd42337c2a8b0cd';
  const userId = auth().currentUser?.uid;

  useEffect(() => {
    database()
      .ref(`/user/${userId}`)
      .once('value', snapshot => {
        setLocation(snapshot.val()?.location.location);
      })
      .then(() => {
        if (location?.lat && location?.lng) {
          fetchWeather();
        }
      });
  }, [location]);

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lng}&appid=${API_KEY}`,
      //   `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(data => {
        const temp = (data.main.temp - 273.15).toFixed(0);
        setTemparature(temp);
      })
      .catch(() => {
        return;
      });
  };
  return (
    <Box
      paddingHorizontal="m"
      paddingTop="l"
      marginBottom="m"
      backgroundColor="secondaryBackground"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row">
      <Box flex={3}>
        <Box justifyContent="center">
          <Text variant="header">Good Morning</Text>
        </Box>
        <Box paddingTop="s">
          <Text variant="TextButtonTitle">{currentDate()}</Text>
        </Box>
      </Box>
      <Box flex={1} alignItems="flex-end" paddingTop="s">
        <Box>
          <Sun width={24} height={24} fill="none" />
        </Box>
        <Box justifyContent="center" paddingTop="xs">
          <Text variant="buttonTitle" fontSize={14} lineHeight={14}>
            {temaparature}°C
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default Banner;
