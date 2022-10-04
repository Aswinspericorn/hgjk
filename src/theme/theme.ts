import {
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TextInput as RNTextInput,
} from 'react-native';
import {createBox, createText, createTheme} from '@shopify/restyle';
export const palette = {
  primary: '#6B4EFF',
  white: '#FFF',
  black: '#090A0A',
  darkGray: '#DAE2EB',
  lightGray: '#AFBCCB',
  pointerGrey: '#E3E5E5',
  TextGrey: '#6C7072',
  ErrorRed: '#D22A0A',
  buttonGrey: '#979C9E',
  PracticeBlue: '#F2F4F5',
  selectedBlue: '#E7E7FF',
  inputBgBlue: '#F2F4F5',
  myDetailsTopic: '#F7F9FA',
};

const theme = createTheme({
  spacing: {
    xxs: 6,
    xs: 8,
    xss: 12,
    s: 16,
    m: 24,
    l: 36,
    xl: 48,
    xxl: 54,
    xxxl: 62,
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
    smallTextLogin: palette.TextGrey,
    errorColor: palette.ErrorRed,
    buttonSetupGrey: palette.buttonGrey,
    PracticAreaBg: palette.PracticeBlue,
    SelectedPracticeAreaBg: palette.selectedBlue,
    inputBgBlue: palette.inputBgBlue,
    myDetailsTopic: palette.myDetailsTopic,
  },
  breakpoints: {
    phone: 0,
  },
  textVariants: {
    header: {
      fontFamily: 'Inter-Bold',
      fontStyle: 'Normal',
      fontSize: 32,
      lineHeight: 36,
      color: 'primaryTitleText',
    },
    subHeader: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: 'primaryTitleText',
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
      lineHeight: 16,
      color: 'primaryTitleText',
    },
    interMedium: {
      fontFamily: 'Inter-Medium',
      fontSize: 16,
      lineHeight: 16,
      color: 'blueTitleText',
    },
    PersonalizationRegular: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      lineHeight: 24,
      color: 'primaryTitleText',
    },
  },
  borderRadii: {
    xxs: 4,
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
    xl: 48,
    xxl: 54,
    xxxl: 62,
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
