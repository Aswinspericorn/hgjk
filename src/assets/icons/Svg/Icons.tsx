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

export const Bell = ({color}: Props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Rect x="0" y="0" width="100" height="100" />
      <Path
        d="M14.23 21C14.0542 21.3031 13.8018 21.5547 13.4982 21.7295C13.1946 21.9044 12.8504 21.9965 12.5 21.9965C12.1496 21.9965 11.8054 21.9044 11.5018 21.7295C11.1982 21.5547 10.9458 21.3031 10.77 21M18.5 8C18.5 6.4087 17.8679 4.88258 16.7426 3.75736C15.6174 2.63214 14.0913 2 12.5 2C10.9087 2 9.38258 2.63214 8.25736 3.75736C7.13214 4.88258 6.5 6.4087 6.5 8C6.5 15 3.5 17 3.5 17H21.5C21.5 17 18.5 15 18.5 8Z"
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
    <Svg width="25" height="24" viewBox="0 0 25 24" >
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
        d="M3 8.99988L12 1.99988L21 8.99988V19.9999C21 20.5303 20.7893 21.039 20.4142 21.4141C20.0391 21.7892 19.5304 21.9999 19 21.9999H5C4.46957 21.9999 3.96086 21.7892 3.58579 21.4141C3.21071 21.039 3 20.5303 3 19.9999V8.99988Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
