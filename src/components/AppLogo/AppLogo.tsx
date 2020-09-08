import React from 'react';
import { MessageDots } from 'tabler-icons-react';
import styled from 'styled-components';

const StyledAppLogo = styled.div`
  display: flex;
  h1 {
    font-size: 48px;
  }
`;

const AppLogo = () => (
  <StyledAppLogo>
    <MessageDots color='black' size={48} />
    <h1>Chatty</h1>
  </StyledAppLogo>
);

export default AppLogo;
