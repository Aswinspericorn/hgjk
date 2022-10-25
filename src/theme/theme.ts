import {
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TextInput as RNTextInput,
} from 'react-native';
import {createBox, createText, createTheme} from '@shopify/restyle';
export const palette = {
  primary: '#6B4EFF',
  dark: '#262626',
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
  mapGreen: '#34a853',
  mapBlue: '#1a73e8',
  transparent: 'transparent',
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
    mainForeground: palette.white,
    primaryCardBackground: palette.primary,
    primaryTitleText: palette.black,
    scrollTextBlack: palette.black,
    buttonWhite: palette.white,
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
    mapGreen: palette.mapGreen,
    mapButtonBlue: palette.mapBlue,
    transparent: palette.transparent,
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

type Theme = typeof theme;
export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    secondaryBackground: palette.dark,
    mainBackground: palette.dark,
    primaryTitleText: palette.white,
    myDetailsTopic: palette.dark,
  },
};

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const TextInput = createText<Theme, TextInputProps>(RNTextInput);

export const TouchableBox = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity,
);

export default theme;
