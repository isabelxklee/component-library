import React, { ReactElement } from 'react';
import { styled } from 'styled-components';

interface SelectProps {
  label: string;
}

const Wrapper = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const StyledSelect = styled.select`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding: 24px;
  width: fit-content;
`;

export const Select = ({ label }: SelectProps): ReactElement => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledSelect name="Example name">
        <option value="ALL">ALL</option>
        <option value="BANANAS">BANANAS</option>
        <option value="ORANGES">ORANGES</option>
      </StyledSelect>
    </Wrapper>
  );
};
