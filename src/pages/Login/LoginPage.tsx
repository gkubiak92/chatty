import React from 'react';
import { Styled } from 'components/Styled';
import styled from 'styled-components';

const StyledLogin = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginPage: React.FC = () => (
  <StyledLogin>
    <header>Login</header>
    <input type='text' />
    <Styled.Button>Login</Styled.Button>
  </StyledLogin>
);

export default LoginPage;
