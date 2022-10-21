import React from 'react';
import {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';
import {getAllUsersWithoutFilter} from '../../helper/Firebase.helper';
import {Box} from '../../theme/theme';

const MarkersOfAllUsers = ({
  setMarkerLoaded,
  setScrollToIndex,
  scrollToIndex,
  setRegion,
}) => {
  const [users, setUsers] = useState<Array<object>>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(scrollToIndex);
  }, [scrollToIndex]);

  useEffect(() => {
    const getUsers = async () => {
      const usersList = await getAllUsersWithoutFilter();

      setUsers(usersList);
      setSelected(scrollToIndex);
      setMarkerLoaded(usersList);
    };
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      {users?.length > 0 &&
        users?.map((item, index) => (
          <Box
            key={index}
            height={70}
            width={70}
            justifyContent="center"
            padding="s">
            <Marker
              onSelect={() => {}}
              onPress={() => {
                setSelected(index);
                setRegion({
                  latitude: item?._data.location.location.lat,
                  longitude: item?._data.location.location.lng,
                  latitudeDelta: 50,
                  longitudeDelta: 50,
                });
                setScrollToIndex(index);
              }}
              coordinate={{
                latitude: item?._data.location.location.lat,
                longitude: item?._data.location.location.lng,
              }}>
              <Image
                source={{uri: item?._data.photo}}
                style={[index === selected && styles.border, styles.image]}
              />
            </Marker>
          </Box>
        ))}
    </Box>
  );
};
export default MarkersOfAllUsers;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  image: {height: 35, width: 35, borderRadius: 100},
  border: {
    borderColor: '#1a73e8',
    borderWidth: 2,
  },
});
