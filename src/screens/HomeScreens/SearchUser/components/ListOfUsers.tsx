import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import UserTile from '../../../../components/UserTile';
import {Box, Text} from '../../../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {changeRecentSearch} from '../../../../store/redux/actions/RecentSearchesReducer';
import {useAppDispatch} from '../../../../store/redux/store';
import {SearchUserNavigate} from '../../../../Types/Navigation';

interface Props {
  list:
    | FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[];
  search: string;
}
const ListOfUsers = ({list, search}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<SearchUserNavigate>();

  const onPressHandler = (data: object) => {
    dispatch(changeRecentSearch(search));
    navigation.navigate('UserDetails', data);
  };
  return (
    <Box paddingTop="m">
      <ScrollView showsVerticalScrollIndicator={false}>
        {list?.length > 0 ? (
          list?.map((item: any, index: number) => (
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
          ))
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
