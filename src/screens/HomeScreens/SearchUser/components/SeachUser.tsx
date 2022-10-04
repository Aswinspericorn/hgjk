import React, {useEffect} from 'react';
import {Box, TextInput, TouchableBox} from '../../../../theme/theme';
import Lens from '../../../../assets/icons/Svg/Vector.svg';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {getAllUsers} from '../../../../helper/Firebase.helper';
import ListOfUsers from './ListOfUsers';

import RecentSearchesList from './RecentSearches';

const SearchUser = () => {
  const [search, setSearch] = useState<string>('');
  const [users, setUsers] = useState<Array<object>>([{}]);

  useEffect(() => {
    const searchHandler = async () => {
      const userList = await getAllUsers(search);
      setUsers(userList);
    };
    searchHandler();
  }, [search]);
  return (
    <Box
      flex={1}
      paddingTop="xl"
      backgroundColor="secondaryBackground"
      paddingHorizontal="m">
      <Box
        flexDirection="row"
        borderWidth={1}
        borderColor="pointerFill"
        height={45}
        backgroundColor="inputBgBlue"
        borderRadius="xs"
        alignItems="center">
        <Box alignItems="center" flex={1}>
          <TouchableBox onPress={() => {}} flexDirection="row">
            <Lens width={16} height={16} fill="none" />
          </TouchableBox>
        </Box>
        <Box flex={5}>
          <TextInput
            value={search}
            placeholderTextColor="#6C7072"
            style={styles.width}
            variant="TextButtonTitle"
            placeholder="Search"
            onChangeText={value => {
              setSearch(value);
            }}
          />
        </Box>
      </Box>
      {search ? (
        <ListOfUsers list={users} search={search} />
      ) : (
        <RecentSearchesList setSearch={setSearch} />
      )}
    </Box>
  );
};
export default SearchUser;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  width: {
    width: '100%',
  },
});
