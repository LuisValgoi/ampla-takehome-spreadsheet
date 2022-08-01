import React, { useCallback, useEffect, useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { ISpreadsheetData } from 'components/Spreadsheet';
import { getData, getReferenceCell, persistValue } from 'utils/Spreadsheet';

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
  const [textValue, setTextValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>(data?.[humanIndex]?.value);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // effect
  useEffect(() => {
    setTextValue(getReferenceCell(inputValue, humanIndex, data, false));
  }, [data, humanIndex, inputValue]);

  // handlers
  const handleSaveValue = useCallback(
    (value: string) => {
      setInputValue(value);
      persistValue(data, linkId, value, humanIndex);
    },
    [data, humanIndex, linkId],
  );

  // render
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
            <UI.TableBodyCellParagraph>{textValue}</UI.TableBodyCellParagraph>
          )}
        </OutsideClickHandler>
      </UI.TableBodyCell>
    );
  }, [handleSaveValue, textValue, inputValue, isFocused]);

  return renderTableBodyCell;
};

export default React.memo(TableBodyCell);
