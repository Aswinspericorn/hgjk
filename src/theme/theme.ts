import {
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TextInput as RNTextInput
} from 'react-native';
import {createBox, createText, createTheme} from '@shopify/restyle';

export const palette = {
  primary: '#6B4EFF',
  white: '#FFF',
  black: '#090A0A',
  darkGray: '#DAE2EB',
  lightGray: '#AFBCCB',
  pointerGrey: '#E3E5E5',
};

const theme = createTheme({
  spacing: {
    xs: 10,
    s: 20,
    m: 30,
    l: 40,
    xl: 60,
    xxl: 70,
    xxxl: 80,
  },
  colors: {
    mainBackground: palette.darkGray,
    secondaryBackground: palette.white,
    mainForeground: palette.black,
    primaryCardBackground: palette.primary,
    primaryTitleText: palette.black,
    secondaryTitleText: palette.lightGray,
    blueTitleText: palette.primary,
    pointerFill: palette.pointerGrey,
  },
  breakpoints: {
    phone: 0,
  },
  textVariants: {
    header: {
      fontFamily: 'Inter-ExtraBold',
      fontStyle: 'Normal',
      fontWeight: 'bold',
      fontSize: 32,
      lineHeight: 46,
      color: 'primaryTitleText',
    },
    boldHeader: {
      fontFamily: 'Inter-ExtraBold',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 16,
      color: 'secondaryTitleText',
    },
    body: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      lineHeight: 24,
      color: 'secondaryTitleText',
    },
    buttonTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
      lineHeight: 16,
      color: 'primaryTitleText',
    },
    TextButtonTitle: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      lineHeight: 24,
      color: 'primaryTitleText',
      fontWeight: '500',
    },
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 12,
    xl: 26,
    f: 50,
  },
});

// const darkTheme: Theme = {
//   ...theme,
//   colors: {
//     ...theme.colors,
//     mainBackground: palette.black,
//     mainForeground: palette.white,

//     secondaryCardBackground: palette.darkGray,
//     secondaryCardText: palette.white,
//   },
// };

type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const TextInput = createText<Theme, TextInputProps>(RNTextInput);

export const TouchableBox = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity,
);

export default theme;
