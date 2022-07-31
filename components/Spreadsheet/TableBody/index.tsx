import React, { useCallback, useRef } from 'react';
import { v4 as uuid } from 'uuid';

import { useSpreadSheet } from 'contexts/SpreadSheetContext';

import * as UI from './index.style';

interface TableBodyProps {
  cells: string[][];
  letters: string[];
}

const TableBody: React.FC<TableBodyProps> = (props) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { cellsFocused, setCellsFocused } = useSpreadSheet();

  const handleOnFocusCell = useCallback(
    (columnLetter?: string, rowNumber?: number) => {
      setCellsFocused({ columnLetter, rowNumber });
      setTimeout(() => inputRef?.current?.focus(), 100);
    },
    [setCellsFocused],
  );

  return (
    <UI.TableBody>
      {props.cells.map((row, number) => (
        <tr key={uuid()}>
          <UI.TableBodyFixedCell $highlighted={cellsFocused.rowNumber === number}>{number + 1}</UI.TableBodyFixedCell>

          {row.map((value, letter) => {
            const hasBeenSelected =
              cellsFocused.rowNumber === number && cellsFocused.columnLetter === props.letters[letter];
            return (
              <UI.TableBodyCell
                key={uuid()}
                onClick={() => handleOnFocusCell(props.letters[letter], number)}
                $hasBeenSelected={hasBeenSelected}
              >
                {hasBeenSelected && (
                  <input
                    style={{ width: '95px', border: 0, height: '10px', fontSize: '10px', outline: 'unset' }}
                    ref={inputRef}
                    type="string"
                  />
                )}
              </UI.TableBodyCell>
            );
          })}
        </tr>
      ))}
    </UI.TableBody>
  );
};

export default TableBody;
