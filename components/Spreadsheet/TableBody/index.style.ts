import styled from '@emotion/styled';

export const TableBody = styled.tbody``;

export const TableBodyFixedCell = styled.td<{ $highlighted: boolean }>`
  min-width: 100px;
  background-color: ${(props) => (props.$highlighted ? 'antiquewhite' : 'whitesmoke')};
  border: 0;
  outline: 1px solid black;
  text-align: center;
`;

export const TableBodyCell = styled.td<{ $hasBeenSelected?: boolean }>`
  min-width: 100px;
  border: 0.5px solid lightsteelblue;
  border-collapse: collapse;
  cursor: pointer;

  ${(props) => (props.$hasBeenSelected ? 'outline: 2px solid grey;' : '')};

  &:active,
  &:focus {
    outline: 2px solid grey;
  }
`;
