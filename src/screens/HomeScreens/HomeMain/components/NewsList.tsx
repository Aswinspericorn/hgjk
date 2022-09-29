import React from 'react';
import {Image, StyleSheet} from 'react-native';
import HomeTile from '../../../../components/HomeTile';
import {HomePageDetailsArray} from '../../../../constants/HomePageDetailsArray';
import {Box, Text} from '../../../../theme/theme';

interface Props {
  currentTopic: number;
}
const NewsList = ({currentTopic}: Props) => {
  return (
    <Box paddingHorizontal="m">
      <Box paddingTop="xs" paddingBottom="s">
        <Box justifyContent="center" alignItems="center">
          <Image
            source={HomePageDetailsArray[currentTopic].content[0].image}
            style={styles.Image}
          />
        </Box>
        <Box paddingVertical="xs">
          <Text variant="buttonTitle" lineHeight={24}>
            {HomePageDetailsArray[currentTopic].content[0].title}
          </Text>
          <Text
            variant="TextButtonTitle"
            color="buttonSetupGrey"
            paddingVertical="xs"
            fontSize={12}>
            {HomePageDetailsArray[currentTopic].content[0].describe}
          </Text>
        </Box>
      </Box>
      <Box>
        {HomePageDetailsArray[currentTopic].content.map((item, index) => (
          <HomeTile
            key={index}
            title={item.title}
            describe={item.describe}
            image={item.image}
          />
        ))}
      </Box>
    </Box>
  );
};
export default NewsList;
const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 200,
  },
});
