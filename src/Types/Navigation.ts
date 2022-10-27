import {CompositeScreenProps} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {FirebaseReturnData, UserDataProps} from './CommonProps';

export type RootStackParamList = {
  Homestack: HomeNaviationParamList;
};

export type HomeNaviationParamList = {
  Homemain: BottomBarParamList;
  DetailNews: object;
  UserDetails: object;
  Map: UserDataProps | FirebaseReturnData;
  Settings: undefined;
};

export type BottomBarParamList = {
  Home: undefined;
  FavouriteMain: undefined;
  Search: SearchStackNavigationParamList;
  PersonalDetails: PersonalDetailsStackNavigationParamList;
};

export type SearchStackNavigationParamList = {
  SeachHome: undefined;
};
export type PersonalDetailsStackNavigationParamList = {
  PersonalDetailsHome: undefined;
  MyDetails: undefined;
};

export type UniversalProps = {
  navigation: ProfileScreenProp;
};
export type ProfileScreenProp = CompositeScreenProps<
  NativeStackScreenProps<BottomBarParamList, 'PersonalDetails'>,
  CompositeScreenProps<
    NativeStackScreenProps<HomeNaviationParamList>,
    NativeStackScreenProps<PersonalDetailsStackNavigationParamList>
  >
>;

export type FavouriteMainNavigate = NativeStackNavigationProp<
  HomeNaviationParamList,
  'DetailNews'
>;

export type MyDetailsNaviationProps = NativeStackScreenProps<
  HomeNaviationParamList,
  'Map'
>;

export type SearchUserNavigate = NativeStackNavigationProp<
  HomeNaviationParamList,
  'UserDetails'
>;

export type NavigateToMap = NativeStackScreenProps<
  HomeNaviationParamList,
  'Map'
>;
