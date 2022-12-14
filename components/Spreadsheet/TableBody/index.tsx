import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuid } from 'uuid';

import TableBodyCell from 'components/Spreadsheet/TableBodyCell';
import { ISpreadsheetData } from 'interfaces/Spreadsheet';

import * as UI from './index.style';

interface TableBodyProps {
  cells: string[][];
  letters: string[];
  linkId: string;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
  // render
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
              />
            ))}
          </tr>
        ))}
      </UI.TableBody>
    ),
    [props.cells, props.letters, props.linkId],
  );

  return renderTableBody;
};

export default React.memo(TableBody);
