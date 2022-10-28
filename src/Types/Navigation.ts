import {CompositeScreenProps, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {FirebaseReturnData, UserDataProps} from './CommonProps';

export type RootStackParamList = {
  Homestack: HomeNaviationParamList;
};

export type AuthStackParamList = {
  GetStarted: undefined;
  YouLearn: undefined;
  LoginMobile: undefined;
  AuthenticateOtp: undefined;
  EmailSignup: undefined;
  EmailSignin: undefined;
  SetupPersonalizationOne: undefined;
  SetupPersonalizationTwo: undefined;
  AddEmail: undefined;
  SetupLocation: undefined;
};
export type HomeNaviationParamList = {
  DetailNews: object;
  Homemain: BottomBarParamList;
  UserDetails: UserDataProps;
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

export type FavouriteMainNavigate = NativeStackScreenProps<
  HomeNaviationParamList,
  'DetailNews'
>;

export type MyDetailsNaviationProps = NativeStackScreenProps<
  HomeNaviationParamList,
  'Map'
>;

export type SearchUserNavigate = NativeStackScreenProps<
  HomeNaviationParamList,
  'UserDetails'
>;

export type NavigateToMap = NativeStackNavigationProp<
  HomeNaviationParamList,
  'Map'
>;
export type RouteToMap = RouteProp<HomeNaviationParamList, 'Map'>;
