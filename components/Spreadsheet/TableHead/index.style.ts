import styled from '@emotion/styled';

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  background-color: whitesmoke;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th<{ $highlighted?: boolean; $none?: boolean }>`
  width: 100px;
  min-width: 100px;
  outline: 1px solid black;
  border: 0;
  background-color: ${(props) => (props.$highlighted ? 'antiquewhite' : props.$none ? 'aliceblue' : 'unset')};
`;
