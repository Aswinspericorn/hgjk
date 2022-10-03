import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
interface Props {
  color: string;
  fill?: string;
}
export const Person = ({color}: Props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.25 11C14.4591 11 16.25 9.20914 16.25 7C16.25 4.79086 14.4591 3 12.25 3C10.0409 3 8.25 4.79086 8.25 7C8.25 9.20914 10.0409 11 12.25 11Z"
        stroke={color ? color : '#6B4EFF'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.25 21V19C20.25 17.9391 19.8286 16.9217 19.0784 16.1716C18.3283 15.4214 17.3109 15 16.25 15H8.25C7.18913 15 6.17172 15.4214 5.42157 16.1716C4.67143 16.9217 4.25 17.9391 4.25 19V21"
        stroke={color ? color : '#6B4EFF'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const Search = ({color}: Props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Rect x="0" y="0" width="100" height="100" />
      <Path
        d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke={color ? color : '#6B4EFF'}
      />
    </Svg>
  );
};

export const Love = ({color, fill}: Props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24">
      <Rect x="0" y="0" width="100" height="100" />
      <Path
        d="M20.5901 2.60999C20.0793 2.099 19.4729 1.69364 18.8054 1.41708C18.138 1.14052 17.4225 0.998169 16.7001 0.998169C15.9776 0.998169 15.2622 1.14052 14.5947 1.41708C13.9272 1.69364 13.3208 2.099 12.8101 2.60999L11.7501 3.66999L10.6901 2.60999C9.65837 1.5783 8.25909 0.998704 6.80006 0.998704C5.34103 0.998704 3.94175 1.5783 2.91006 2.60999C1.87837 3.64169 1.29877 5.04096 1.29877 6.49999C1.29877 7.95903 1.87837 9.3583 2.91006 10.39L3.97006 11.45L11.7501 19.23L19.5301 11.45L20.5901 10.39C21.1011 9.87924 21.5064 9.27281 21.783 8.60535C22.0595 7.93789 22.2019 7.22248 22.2019 6.49999C22.2019 5.77751 22.0595 5.0621 21.783 4.39464C21.5064 3.72718 21.1011 3.12075 20.5901 2.60999V2.60999Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke={color ? color : '#6B4EFF'}
        fill={fill ? fill : 'none'}
      />
    </Svg>
  );
};

export const Home = ({color}: Props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Rect x="0" y="0" width="100" height="100" />
      <Path
        stroke={color ? color : '#6B4EFF'}
        d="M3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19ZM3 19L14 8L19 13M8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
