import { KeyboardEvent, useCallback, useMemo, useRef, useState } from 'react';

import { ISpreadsheetData } from 'components/Spreadsheet';
import { getData } from 'utils/Spreadsheet';

import * as UI from './index.style';

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
  const cellValueRaw = props?.data?.[humanIndex];

  // memoized
  const cellValueDisplay = useMemo(() => {
    if (cellValueRaw?.startsWith('=')) {
      const cellValueHumanIndex = cellValueRaw.slice(1, cellValueRaw.length).toUpperCase();
      const cellValue = props?.data?.[cellValueHumanIndex];
      return cellValue;
    }

    return cellValueRaw;
  }, [cellValueRaw, props?.data]);

  // ref
  const cellRef = useRef({ value: cellValueDisplay }) as React.MutableRefObject<HTMLInputElement>;

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
          ref={cellRef}
          defaultValue={cellRef?.current?.value}
          onKeyUp={(event) => handleKeyChange(event)}
        />
      </UI.TableBodyCell>
    );
  }, [handleKeyChange, isFocused]);

  return renderTableBodyCell;
};

export default TableBodyCell;