import React from 'react';
import LoginPage from 'pages/Login/LoginPage';
import styled from 'styled-components';

const StyledApp = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledApp className='App'>
      <LoginPage />
    </StyledApp>
  );
}

export default App;
