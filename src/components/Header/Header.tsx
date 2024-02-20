import React, { ReactElement } from 'react';
import { styled } from 'styled-components';

// interface InputProps {
//   input?: string;
//   label: string;
//   placeholder: string;
// }

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

// const Label = styled.label`
//   font-family: 'Inter', sans-serif;
//   font-weight: 500;
//   font-size: 30px;
//   margin-bottom: 16px;
//   text-transform: uppercase;
// `;

// const StyledInput = styled.input`
//   font-family: 'Inter', sans-serif;
//   font-weight: 500;
//   font-size: 24px;
//   text-transform: uppercase;
//   padding: 24px;
//   width: fit-content;
//   -webkit-appearance: none;
//   appearance: none;
//   border: 2px solid #000;

//   &:focus {
//     outline: none;
//     border: 2px solid #000;
//     /* background-color: rgba(0, 0, 0, 0.1); */
//     transition: 0.3s;
//   }
// `;

export const Header = (): ReactElement => {
  return (
    <Wrapper>
      <p>Hello world</p>
    </Wrapper>
  );
};
