import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Box, Text, TouchableBox} from '../../../theme/theme';
import Facebook from '../../../assets/icons/Svg/facebook.svg';
import Google from '../../../assets/icons/Svg/google.svg';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {changeAuthStatus} from '../../../store/redux/AuthStatus';
import {getSingleUserDetails} from '../../../helper/Firebase.helper';
import {changeUserData} from '../../../store/redux/UserData';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {
  WalkPonitsArray,
  WalkThroughArray,
} from '../../../constants/WalkThroughArray';
import ImageTopicScroll from './components/ImageTopicScroll';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
} from '../../../helper/WalkThrough.helper';
interface Props {
  navigation: any;
}
const {width} = Dimensions.get('window');

const WalkThrough = ({navigation}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const scrollViewRef = useRef<any>();
  const dispatch = useDispatch();
  GoogleSignin.configure({
    webClientId:
      '719758580576-1hgli2r1blk86hgd8n861tfs755e6sii.apps.googleusercontent.com',
  });

  const checkIsNewUser = async () => {
    const result = await getSingleUserDetails();
    if (result === undefined) {
      navigation.navigate('SetupPersonalizationOne');
    } else {
      dispatch(changeUserData(result));
      dispatch(changeAuthStatus(true));
    }
  };

  const translateX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  const array = [
    WalkThroughArray[WalkThroughArray.length - 1],
    ...WalkThroughArray,
    WalkThroughArray[0],
  ];
  useEffect(() => {
    goToPage(1);
  }, []);

  function goToPage(page: number) {
    const to = page * width;
    scrollViewRef.current.scrollTo({x: to, y: 0, animated: false});
  }
  function onScrollEnd(e) {
    const {contentOffset} = e.nativeEvent;

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / width);
    console.log(pageNum, 'pagenum');
    if (currentPage >= WalkThroughArray.length) {
      console.log('insde', currentPage);
      setCurrentPage(0);
      goToPage(1);
      return;
    }
    setCurrentPage(pageNum);
  }

  return (
    <Box flex={1} backgroundColor="secondaryBackground">
      <Box
        paddingHorizontal="m"
        flex={1}
        flexDirection="row"
        alignItems="center"
        paddingTop="xl"
        justifyContent="center">
        <Text variant="body" color="primaryTitleText">
          You
        </Text>
        <Text variant="body" color="blueTitleText">
          Learn
        </Text>
      </Box>
      <Box flex={3} justifyContent="center" alignItems="center">
        <Animated.ScrollView
          pagingEnabled
          ref={scrollViewRef}
          onMomentumScrollEnd={onScrollEnd}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          horizontal
          style={styles.screen}
          scrollEventThrottle={16}
          onScroll={onScrollHandler}>
          {array.map((item, index) => (
            <ImageTopicScroll
              item={item}
              index={index}
              key={index}
              translateX={translateX}
            />
          ))}
        </Animated.ScrollView>
      </Box>
      <Box
        flex={0.9}
        paddingHorizontal="m"
        flexDirection="row"
        paddingVertical="xs"
        justifyContent="center"
        alignItems="center">
        {WalkPonitsArray.map(index => (
          <Box
            key={index}
            marginRight="xs"
            width={7}
            height={7}
            borderRadius="xxl"
            backgroundColor={
              index === currentPage ? 'blueTitleText' : 'pointerFill'
            }
          />
        ))}
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        flex={1}
        paddingHorizontal="m">
        <TouchableBox
          disabled={isLoading}
          justifyContent="center"
          backgroundColor="blueTitleText"
          borderRadius="xl"
          paddingVertical="s"
          marginBottom="s"
          width="60%"
          onPress={() => navigation.navigate('EmailSignup')}>
          <Text
            variant="buttonTitle"
            textAlign="center"
            color="secondaryBackground">
            Create account
          </Text>
        </TouchableBox>
      </Box>
      <Box
        flex={0.4}
        justifyContent="center"
        marginTop="s"
        alignItems="center"
        paddingBottom="s">
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          paddingBottom="m">
          <Box
            flex={0.7}
            borderBottomColor="pointerFill"
            borderBottomWidth={1}
            width="100%"
          />
          <Box flex={1} alignItems="center">
            <Text
              variant="TextButtonTitle"
              color="smallTextLogin"
              textAlign="center">
              or continue with{' '}
            </Text>
          </Box>
          <Box
            flex={0.7}
            borderBottomColor="pointerFill"
            borderBottomWidth={1}
            width="100%"
          />
        </Box>
        <Box flexDirection="row" overflow="hidden">
          <Box
            marginHorizontal="xs"
            borderRadius="xs"
            borderWidth={2}
            borderColor="pointerFill">
            <Pressable
              onPress={() =>
                onFacebookButtonPress(setIsLoading, checkIsNewUser)
              }
              disabled={isLoading}
              style={({pressed}) => (pressed ? styles.pressed : {})}>
              <Box paddingHorizontal="m" paddingVertical="xs">
                <Facebook width={40} height={30} fill="none" />
              </Box>
            </Pressable>
          </Box>

          <Box
            marginHorizontal="xs"
            borderRadius="xs"
            borderWidth={2}
            borderColor="pointerFill">
            <Pressable
              onPress={() => onGoogleButtonPress(checkIsNewUser)}
              disabled={isLoading}
              style={({pressed}) => (pressed ? styles.pressed : {})}>
              <Box paddingHorizontal="m" paddingVertical="xs">
                <Google width={40} height={30} fill="none" />
              </Box>
            </Pressable>
          </Box>
        </Box>
      </Box>
      <Box
        flex={0.4}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginBottom="s"
        paddingBottom="l">
        <Text variant="TextButtonTitle" lineHeight={24}>
          Have an account?
        </Text>
        <TouchableBox
          onPress={() => navigation.navigate('LoginMobile')}
          disabled={isLoading}>
          <Text variant="TextButtonTitle" lineHeight={24} color="blueTitleText">
            Log in.
          </Text>
        </TouchableBox>
      </Box>
    </Box>
  );
};
export default WalkThrough;
const styles = StyleSheet.create({
  screen: {
    flex: 3,
  },
  pressed: {
    opacity: 0.3,
  },
});
