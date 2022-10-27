import {createSelector} from '@reduxjs/toolkit';

const getReducer = (state) => state;

export const getAuthStatus = createSelector(
  getReducer,
  reducer => reducer?.AuthStatus.isLoggedIn,
);

export const getDarkModeStatus = createSelector(
  getReducer,
  reducer => reducer?.DarkModeStatus.mode,
);

export const getIsDataChangedStatus = createSelector(
  getReducer,
  reducer => reducer?.IsDataChanged.isChanged,
);

export const getUserData = createSelector(
  getReducer,
  reducer => reducer?.UserData.userData,
);

export const getRecentSearch = createSelector(
  getReducer,
  reducer => reducer?.RecentSearches.searchData,
);
