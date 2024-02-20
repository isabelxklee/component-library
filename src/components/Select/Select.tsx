import React, { ReactElement } from 'react';

export const Select = (): ReactElement => {
  return (
    <>
      <label>Example select</label>
      <select name="Example name">
        <option value="All">All</option>
      </select>
    </>
  );
};
