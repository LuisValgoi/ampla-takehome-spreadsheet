import React, { useCallback, useEffect, useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { getData, getReferenceCell, persistValue } from 'utils/Spreadsheet';

import * as UI from './index.style';

const TableBodyCell: React.FC<{
  number: number;
  letters: string[];
  letterIdx: number;
  linkId: string;
}> = (props) => {
  // variables
  const linkId = useMemo(() => props.linkId, [props.linkId]);
  const rowIndex = useMemo(() => props.number, [props.number]);
  const cellIndex = useMemo(() => props.letterIdx, [props.letterIdx]);
  const humanIndex = useMemo(() => `${props.letters[cellIndex]}${rowIndex + 1}`, [cellIndex, rowIndex, props.letters]);
  const data = getData(linkId);
  const cellDep = useMemo(() => data?.[humanIndex]?.dep, [data, humanIndex]);
  const isSub = useMemo(() => !!cellDep, [cellDep]);

  // state
  const [textValue, setTextValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string | undefined>(data?.[humanIndex]?.value);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // effect
  useEffect(() => {
    setTextValue(getReferenceCell(linkId, inputValue, humanIndex, false));
  }, [humanIndex, inputValue, linkId]);

  // observable
  useEffect(() => {
    if (typeof window === 'undefined' && !isSub) {
      return;
    }

    if (!!cellDep) {
      window.addEventListener('DEP', () => {
        const data = getData(linkId);
        setInputValue(data?.[humanIndex]?.value);
        setTextValue(getReferenceCell(linkId, data?.[humanIndex]?.value, humanIndex, false));
      });
    }
  }, [cellDep, data, humanIndex, isSub, linkId]);

  // handlers
  const handleSaveValue = useCallback(
    (value: string) => {
      setInputValue(value);
      persistValue(linkId, value, humanIndex);
    },
    [humanIndex, linkId],
  );

  // render
  const renderTableBodyCell = useMemo(() => {
    return (
      <UI.TableBodyCell $isFocused={isFocused} onClick={() => setIsFocused(true)}>
        <OutsideClickHandler display="inline-block" onOutsideClick={() => setIsFocused(false)}>
          {!isFocused ? (
            <UI.TableBodyCellParagraph>{textValue}</UI.TableBodyCellParagraph>
          ) : (
            <UI.TableBodyCellInput
              autoFocus
              type="text"
              value={inputValue || ''}
              onChange={(e) => handleSaveValue(e.target.value)}
              onKeyPress={(event) => (event.key === 'Enter' ? handleSaveValue(event.target.value) : undefined)}
            />
          )}
        </OutsideClickHandler>
      </UI.TableBodyCell>
    );
  }, [handleSaveValue, textValue, inputValue, isFocused]);

  return renderTableBodyCell;
};

export default React.memo(TableBodyCell);
