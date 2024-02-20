import React, { ReactElement } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding: 24px;
  width: fit-content;
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border: 2px solid #000;
  }
`;

export const Input = (): ReactElement => {
  return (
    <Wrapper>
      <label>Type something:</label>
      <StyledInput placeholder="Enter if you dare..." />
    </Wrapper>
  );
};
