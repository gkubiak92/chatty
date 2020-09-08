import React from 'react';
import { Styled } from 'components/Styled';
import styled from 'styled-components';
import { BrandGoogle } from 'tabler-icons-react';

const StyledLogin = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  header {
    margin-bottom: 48px;
  }
`;

const googleIcon = <BrandGoogle size={24} color='black' />;

const LoginPage: React.FC = () => (
  <StyledLogin>
    <header>Login</header>
    <Styled.Button icon={googleIcon}>SignIn with Google</Styled.Button>
  </StyledLogin>
);

export default LoginPage;
