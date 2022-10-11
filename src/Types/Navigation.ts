export type HomeStackParamList = {
  Homestack: HomeNaviationParamList;
};

export type HomeNaviationParamList = {
  Homemain: HomeBottomNaviationParamList;
  DetailNews: {item: object};
  UserDetails: undefined;
  Map: undefined;
};

export type HomeBottomNaviationParamList = {
  Home: undefined;
  FavouriteMain: undefined;
  Search: undefined;
  PersonalDetails: undefined;
};
