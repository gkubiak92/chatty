import React from 'react';
import LoginPage from 'pages/Login/LoginPage';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className='App'>
        <LoginPage />
      </main>
    </ThemeProvider>
  );
}

export default App;
