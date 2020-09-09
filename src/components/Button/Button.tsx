import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './types';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }
  svg {
    margin-right: 12px;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, icon, onClick }) => (
  <StyledButton onClick={onClick}>
    {icon ? icon : null}
    {children}
  </StyledButton>
);

export default Button;
