import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  borderRadius: '4px',
  colors: {
    primary: '#000',
    secondary: '#fff',
    accent: '#FFCF00',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
