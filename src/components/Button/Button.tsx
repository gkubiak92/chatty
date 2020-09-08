import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './types';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 4px;
  border: 4px solid black;
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 600;
  color: black;
  :hover {
    cursor: pointer;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, icon }) => (
  <StyledButton>
    {icon ? icon : null}
    {children}
  </StyledButton>
);

export default Button;
