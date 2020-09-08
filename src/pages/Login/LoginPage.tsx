import React from 'react';
import { Styled } from 'components/Styled';
import styled from 'styled-components';
import { BrandGoogle } from 'tabler-icons-react';
import AppLogo from 'components/AppLogo/AppLogo';

const StyledLoginPage = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  header {
    margin-bottom: 48px;
  }

  div:first-of-type {
    position: absolute;
    top: 32px;
  }
`;

const googleIcon = <BrandGoogle size={24} color='black' />;

const LoginPage: React.FC = () => (
  <StyledLoginPage>
    <AppLogo />
    <Styled.Button icon={googleIcon}>SignIn with Google</Styled.Button>
  </StyledLoginPage>
);

export default LoginPage;
