import React, {useState} from 'react';
import {Box} from '../../../../theme/theme';
import {ScrollView, StyleSheet} from 'react-native';
import Banner from './Banner';
import TopicScroll from './TopicsScroll';
import NewsList from './NewsList';

interface Props {
  navigation: any;
}
const HomeMain = ({}: Props) => {
  const [currentTopic, setCurrentTopic] = useState<number>(0);

  return (
    <Box flex={1} backgroundColor="secondaryBackground" paddingTop="xs">
      <ScrollView
        style={styles.screen}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}>
        <Banner />
        <TopicScroll
          setCurrentTopic={setCurrentTopic}
          currentTopic={currentTopic}
        />
        <NewsList currentTopic={currentTopic} />
      </ScrollView>
    </Box>
  );
};
export default HomeMain;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
