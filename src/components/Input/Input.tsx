import React, { ReactElement } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

// const StyledSelect = styled.select`
//   font-family: 'Inter', sans-serif;
//   font-weight: 500;
//   font-size: 24px;
//   padding: 24px;
//   width: fit-content;
// `;

export const Input = (): ReactElement => {
  return (
    <Wrapper>
      <label>Type something:</label>
      <input placeholder="Enter if you dare..." />
    </Wrapper>
  );
};
