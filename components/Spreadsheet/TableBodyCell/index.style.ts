import styled from '@emotion/styled';

export const TableBodyCell = styled.td<{ $isFocused?: boolean }>`
  min-width: 100px;
  border: 0.5px solid lightsteelblue;
  border-collapse: collapse;
  cursor: pointer;

  ${(props) => (props.$isFocused ? 'outline: 2px solid grey;' : '')};

  &:active,
  &:focus {
    outline: 2px solid grey;
  }
`;

export const TableBodyCellInput = styled.input`
  margin: 0;
  border: 0;
  width: 96px;
  height: 15px;
  font-size: 10px;
  outline: unset;
  display: flex;
`;

export const TableBodyCellParagraph = styled.p`
  margin: 0;
  border: 0;
  width: 96px;
  max-width: 96px;
  height: 15px;
  font-size: 10px;
  outline: unset;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
