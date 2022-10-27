import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {Box, Text} from '../../../../theme/theme';
import {useTranslation} from 'react-i18next';

interface Props {
  setSearch: (a: string) => void;
}
const RecentSearchesList = ({setSearch}: Props) => {
  const list = useSelector(
    (state: any) => state?.AppReducer.RecentSearches.searchData,
  );
  const {t} = useTranslation();
  return (
    <Box>
      <Box paddingVertical="s">
        <Text variant="buttonTitle" lineHeight={20}>
          {t('Search.RecentSearch')}
        </Text>
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        {list?.map((item: string, index: number) => (
          <Pressable
            key={index}
            onPress={() => {
              setSearch(item);
            }}>
            <Box
              paddingHorizontal="s"
              justifyContent="center"
              paddingVertical="s">
              <Text
                variant="PersonalizationRegular"
                fontSize={16}
                lineHeight={20}>
                {item}
              </Text>
            </Box>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
};
export default RecentSearchesList;
