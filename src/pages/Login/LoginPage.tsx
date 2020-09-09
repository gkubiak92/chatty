import React from 'react';
import styled from 'styled-components';
import { BrandGoogle } from 'tabler-icons-react';
import AppLogo from 'components/AppLogo/AppLogo';
import { useDispatch } from 'react-redux';
import { authSuccess } from 'redux/auth/authSlice';
import Button from 'components/Button/Button';

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

const googleIcon = <BrandGoogle size={24} />;

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const handleLoginClick = () => dispatch(authSuccess());

  return (
    <StyledLoginPage>
      <AppLogo size={48} />
      <Button icon={googleIcon} onClick={handleLoginClick}>
        SignIn with Google
      </Button>
    </StyledLoginPage>
  );
};

export default LoginPage;
