import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { ISpreadsheetData } from 'components/Spreadsheet';
import { getData, getReferenceCell } from 'utils/Spreadsheet';

import * as UI from './index.style';

const TableBodyCell: React.FC<{
  number: number;
  letters: string[];
  letterIdx: number;
  linkId: string;
  data: ISpreadsheetData | undefined;
}> = (props) => {
  // variables
  const linkId = props.linkId;
  const data = getData(linkId);
  const rowIndex = props.number;
  const cellIndex = props.letterIdx;
  const humanIndex = `${props.letters[cellIndex]}${rowIndex + 1}`;

  // state
  const [inputValue, setInputValue] = useState<string>(data?.[humanIndex]?.value);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [displayValue, setDisplayValue] = useState<string>('');

  // effect
  useEffect(() => {
    setDisplayValue(getReferenceCell(inputValue, humanIndex, data, false));
  }, [data, humanIndex, inputValue]);

  // handlers
  const handleSaveValue = useCallback(
    (typedValue: string) => {
      setInputValue(typedValue);
      if (typedValue === '') {
        const modifiedData = { ...data };
        delete modifiedData[humanIndex];
        localStorage.setItem(linkId, JSON.stringify(modifiedData));
      } else {
        const cellValue = getReferenceCell(typedValue, humanIndex, data, false);
        const modifiedData = { ...data, [humanIndex]: { value: typedValue, display: cellValue ?? typedValue } };
        localStorage.setItem(linkId, JSON.stringify(modifiedData));
      }
    },
    [data, humanIndex, linkId],
  );

  const renderTableBodyCell = useMemo(() => {
    return (
      <UI.TableBodyCell $isFocused={isFocused} onClick={() => setIsFocused(true)}>
        <OutsideClickHandler display="inline-block" onOutsideClick={() => setIsFocused(false)}>
          {isFocused ? (
            <UI.TableBodyCellInput
              autoFocus
              type="text"
              value={inputValue || ''}
              onChange={(e) => handleSaveValue(e.target.value)}
              onKeyPress={(event) => (event.key === 'Enter' ? handleSaveValue(event.target.value) : undefined)}
            />
          ) : (
            <UI.TableBodyCellParagraph>{displayValue}</UI.TableBodyCellParagraph>
          )}
        </OutsideClickHandler>
      </UI.TableBodyCell>
    );
  }, [handleSaveValue, displayValue, inputValue, isFocused]);

  return renderTableBodyCell;
};

export default TableBodyCell;
