import { useSpreadSheet } from 'contexts/SpreadSheetContext';
import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import * as UI from './index.style';

interface TableHeadProps {
  letters: string[];
}

const TableHead: React.FC<TableHeadProps> = (props) => {
  const { cellsFocused } = useSpreadSheet();
  const EMPTY = useMemo(() => '', []);

  return (
    <UI.TableHead>
      <UI.TableHeadRow>
        <UI.TableHeadCell $none>{EMPTY}</UI.TableHeadCell>
        {props.letters.map((letter) => (
          <UI.TableHeadCell key={uuid()} $highlighted={letter === cellsFocused.columnLetter}>
            {letter}
          </UI.TableHeadCell>
        ))}
      </UI.TableHeadRow>
    </UI.TableHead>
  );
};

export default TableHead;
