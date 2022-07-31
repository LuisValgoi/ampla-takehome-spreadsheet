import styled from '@emotion/styled';

export const TableBody = styled.tbody``;

export const TableBodyFixedCell = styled.td<{ $highlighted?: boolean }>`
  min-width: 100px;
  background-color: ${(props) => (props.$highlighted ? 'antiquewhite' : 'whitesmoke')};
  border: 0;
  outline: 1px solid black;
  text-align: center;
`;
