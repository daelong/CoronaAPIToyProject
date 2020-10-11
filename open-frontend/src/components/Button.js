import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;
  color: ${palette.gray[5]};

  background: ${palette.gray[3]};
  &:hover {
    background: ${palette.gray[1]};
  }
`;

const Button = () => {
  return (
    <>
      <StyledButton>이전주</StyledButton>
    </>
  );
};
export default Button;
