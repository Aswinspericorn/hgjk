import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import UserTile from '../../../../components/UserTile';
import {Box, Text} from '../../../../theme/theme';
import {changeRecentSearch} from '../../../../store/redux/RecentSearchesReducer';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

interface Props {
  list: Array<{_data: {name: string; photo: string}}>;
  search: string;
}
const ListOfUsers = ({list, search}: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPressHandler = (data: object) => {
    dispatch(changeRecentSearch(search));
    navigation.navigate('UserDetails', data);
  };
  return (
    <Box paddingTop="m">
      <ScrollView showsVerticalScrollIndicator={false}>
        {list?.length > 0 ? (
          list?.map(
            (item: {_data: {name: string; photo: string}}, index: number) => (
              <Pressable
                key={index}
                onPress={() => {
                  onPressHandler(item?._data);
                }}>
                <UserTile
                  title={item?._data?.name}
                  describe="senior developer"
                  image={item?._data?.photo}
                />
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
export default ListOfUsers;
