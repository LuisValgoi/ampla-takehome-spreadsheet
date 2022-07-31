import React, { useCallback, useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import * as UI from './index.style';

interface TableBodyProps {
  cells: string[][];
  letters: string[];
}

const TableBody: React.FC<TableBodyProps> = (props) => {
  const renderTableBody = useMemo(
    () => (
      <UI.TableBody>
        {props.cells.map((row, number) => (
          <tr key={uuid()}>
            <TableBodyFixedCell number={number} />

            {row.map((value, letter) => (
              <TableBodyCell key={uuid()} number={number} letters={props.letters} letterIdx={letter} />
            ))}
          </tr>
        ))}
      </UI.TableBody>
    ),
    [props.cells, props.letters],
  );

  return renderTableBody;
};
export default TableBody;

const TableBodyFixedCell: React.FC<{ number: number }> = (props) => {
  return <UI.TableBodyFixedCell>{props.number + 1}</UI.TableBodyFixedCell>;
};

const TableBodyCell: React.FC<{ number: number; letters: string[]; letterIdx: number }> = (props) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = useCallback((focusing: boolean) => {
    setIsFocused(focusing);
  }, []);

  const renderTableBodyCell = useMemo(() => {
    return (
      <UI.TableBodyCell $isFocused={isFocused} onFocus={() => handleFocus(true)} onBlur={() => handleFocus(false)}>
        <UI.TableBodyCellInput type="text" defaultValue={inputRef?.current?.value} ref={inputRef} />
      </UI.TableBodyCell>
    );
  }, [handleFocus, isFocused]);

  return renderTableBodyCell;
};
