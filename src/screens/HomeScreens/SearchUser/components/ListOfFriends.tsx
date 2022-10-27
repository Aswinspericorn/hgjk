import React from 'react';
import {Pressable, ScrollView, StyleSheet} from 'react-native';
import UserTile from '../../../../components/UserTile';
import {Box, Text} from '../../../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {SearchUserNavigate} from '../../../../Types/Navigation';

interface Props {
  list: Array<{_data: {name: string; photo: string; distance: number}}>;
  // distance: number;
}
const ListOfFriends = ({list}: Props) => {
  const navigation = useNavigation<SearchUserNavigate>();
  const onPressHandler = (data: object) => {
    navigation.navigate('UserDetails', data);
  };
  return (
    <Box paddingTop="m">
      <ScrollView showsVerticalScrollIndicator={false}>
        {list?.length > 0 ? (
          list?.map(
            (
              item: {_data: {name: string; photo: string; distance: number}},
              index: number,
            ) => (
              <Pressable
                style={styles.pressable}
                key={index}
                onPress={() => {
                  onPressHandler(item?._data);
                }}>
                <UserTile
                  title={item?._data?.name}
                  describe="senior developer"
                  image={item?._data?.photo}
                />
                <Box position="absolute" right={2}>
                  <Text variant="TextButtonTitle">
                    {item?._data?.distance} km away
                  </Text>
                </Box>
              </Pressable>
            ),
          )
        ) : (
          <Box padding="m">
            <Text variant="buttonTitle">No users</Text>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
};
export default ListOfFriends;
const styles = StyleSheet.create({
  pressable: {
    justifyContent: 'center',
  },
});
