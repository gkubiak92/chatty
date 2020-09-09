import React from 'react';
import { MessageDots } from 'tabler-icons-react';
import { styled } from 'Theme';
import constants from 'utils/constants';
import { AppLogoProps } from './types';

const StyledAppLogo = styled.div<AppLogoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: ${({ size }) => size}px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const AppLogo: React.FC<AppLogoProps> = ({ size }) => (
  <StyledAppLogo size={size}>
    <MessageDots color='black' size={size} />
    <h1>{constants.APP_NAME}</h1>
  </StyledAppLogo>
);

export default AppLogo;
