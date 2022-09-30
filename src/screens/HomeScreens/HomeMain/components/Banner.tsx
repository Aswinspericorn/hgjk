/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import {currentDate} from '../../../../utils/dates';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {Image, StyleSheet} from 'react-native';
import {weatherImagesObj} from '../../../../constants/weatherImagesObj';
import {useNavigation} from '@react-navigation/native';
const Banner = () => {
  const [location, setLocation] = useState<{lat: string; lng: string}>({
    lat: '',
    lng: '',
  });
  const [temaparature, setTemparature] = useState<{temp: string; icon: string}>(
    {temp: '24', icon: '01d'},
  );

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
  }, []);
  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lng}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(data => {
        const temp = (data.main.temp - 273.15).toFixed(0);
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
      marginBottom="m"
      backgroundColor="secondaryBackground"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row">
      <Box flex={3}>
        <Box justifyContent="center">
          <Text variant="header">{currentDate().time}</Text>
        </Box>
        <Box paddingTop="s">
          <Text variant="TextButtonTitle">{currentDate().date}</Text>
        </Box>
      </Box>
      <Box flex={1} alignItems="flex-end" paddingTop="s">
        <Box>
          <Image source={temaparature?.icon} style={styles.icon} />
        </Box>
        <Box justifyContent="center" paddingTop="xs">
          <Text variant="buttonTitle" fontSize={14} lineHeight={14}>
            {temaparature.temp}°C
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
