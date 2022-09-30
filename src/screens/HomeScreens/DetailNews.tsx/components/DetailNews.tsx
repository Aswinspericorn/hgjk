import React from 'react';
import {Image, ScrollView} from 'react-native';
import {Box, Text} from '../../../../theme/theme';

const DetailNews = ({route}) => {
  const data = route.params;
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      paddingTop="l"
      paddingHorizontal="m">
      <Box paddingTop="l">
        <Text variant="TextButtonTitle">My item</Text>
      </Box>
      <Box>
        <ScrollView>
          <Box>
            <Box>
              <Text variant="header" fontSize={25}>
                {data.title}
              </Text>
            </Box>
            <Box>
              <Text
                variant="PersonalizationRegular"
                fontSize={14}
                lineHeight={14}>
                {data.describe}
              </Text>
            </Box>
          </Box>
          <Box>
            <Box>
              <Image
                source={{uri: data.image}}
                style={{height: 200, width: '100%'}}
              />
            </Box>
            <Box>
              <Text variant="TextButtonTitle">
                A day after the Centers for Disease Control and Prevention urged
                Americans to stay home for Thanksgiving, more than one million
                people in the United States got on planes, marking the second
                day that more than a million people have flown since March.
                {'\n'}
                {'\n'}
                Nearly three million additional people have flown in the days
                since. The high number of travelers speaks to a sense of
                pandemic fatigue that many people are experiencing. For some,
                the
              </Text>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};
export default DetailNews;
