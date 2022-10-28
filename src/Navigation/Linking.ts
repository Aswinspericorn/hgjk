import {LinkingOptions} from '@react-navigation/native';

const config = {
  screens: {
    Homestack: {
      screens: {
        Homemain: {
          screens: {
            FavouriteMain: 'favourites',
            Search: 'search',
          },
        },

        UserDetails: {
          path: 'userdetails/:id?',
          parse: {
            id: (id: string) => id,
          },
        },
      },
    },
    GetStarted: '*',
  },
};
const linking: LinkingOptions<{}> = {
  prefixes: ['demo://app'],
  config,
};

export default linking;
