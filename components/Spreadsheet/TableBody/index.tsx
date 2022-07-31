import React, { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { getData } from 'utils/Spreadsheet';
import { ISpreadsheetData } from 'components/Spreadsheet';

import * as UI from './index.style';

interface TableBodyProps {
  cells: string[][];
  letters: string[];
  linkId: string;
  data: ISpreadsheetData | undefined;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
  const renderTableBody = useMemo(
    () => (
      <UI.TableBody>
        {props.cells.map((row, number) => (
          <tr key={uuid()}>
            <UI.TableBodyFixedCell>{number + 1}</UI.TableBodyFixedCell>
            {row.map((_, letter) => (
              <TableBodyCell
                key={uuid()}
                number={number}
                letters={props.letters}
                letterIdx={letter}
                linkId={props.linkId}
                data={props.data}
              />
            ))}
          </tr>
        ))}
      </UI.TableBody>
    ),
    [props.cells, props.data, props.letters, props.linkId],
  );

  return renderTableBody;
};
export default TableBody;

const TableBodyCell: React.FC<{
  number: number;
  letters: string[];
  letterIdx: number;
  linkId: string;
  data: ISpreadsheetData | undefined;
}> = (props) => {
  // variables
  const rowIndex = props.number;
  const cellIndex = props.letterIdx;
  const humanIndex = `${props.letters[cellIndex]}${rowIndex + 1}`;
  const cellValue = props?.data?.[humanIndex];

  // ref
  const inputRef = useRef({ value: cellValue }) as React.MutableRefObject<HTMLInputElement>;

  // state
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // handlers
  const handleKeyChange = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const existingData = getData(props.linkId);
      const modifiedData = { ...existingData, [humanIndex]: event.target.value };
      localStorage.setItem(props.linkId, JSON.stringify(modifiedData));
    },
    [humanIndex, props.linkId],
  );

  const renderTableBodyCell = useMemo(() => {
    return (
      <UI.TableBodyCell $isFocused={isFocused} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
        <UI.TableBodyCellInput
          type="text"
          ref={inputRef}
          defaultValue={inputRef?.current?.value}
          onKeyUp={(event) => handleKeyChange(event)}
        />
      </UI.TableBodyCell>
    );
  }, [handleKeyChange, isFocused]);

  return renderTableBodyCell;
};
