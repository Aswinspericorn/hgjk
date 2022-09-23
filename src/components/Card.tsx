import React from 'react';
import {Box} from '../theme/theme';

interface Props {
  children: any;
}
const Card = ({children}: Props) => {
  <Box
    paddingHorizontal="l"
    paddingVertical="s"
    borderWidth={2}
    borderRadius="m"
    borderColor="pointerFill">
    {children}
  </Box>;
};
export default Card;
