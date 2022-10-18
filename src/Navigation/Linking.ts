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
  },
};
const linking = {
  prefixes: ['demo://app'],
  config,
};

export default linking;
